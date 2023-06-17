import React, { useState, useRef, useEffect } from "react";
import MyVideosPage from "./MyVideosPage";
import WorkspacesPage from "./WorkspacesPage";
import axios from "axios";
import "../../styles/dashboard/NavigationInDash.css";
import { useAccount } from "wagmi";
// import { Web3Storage } from "web3.storage";
import lighthouse from "@lighthouse-web3/sdk";
// import uploadIcon from "../../assets/upload.png";
import uploadIcon from "/src/assets/upload.png";
import closeIcon from "/src/assets/cancel.png";

// const client = new Web3Storage({
//   token:
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGRDOGI5MDZiNUIyMjJFM2Y4MTUzRTI1OEE3OEFGNzZCQkU2NDdGYzgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzg4NjMwMDQ2MzcsIm5hbWUiOiJkZW1vYWJjIn0.2L8rKiCD-eVUwuxz1AFXy6fy5Foh71QZQLZXe5QedcU",
// });

const NavigationInDash = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [currentPage, setCurrentPage] = useState("MyVideos");
  const [popupOpen, setPopupOpen] = useState(false);
  const [recording, setRecording] = useState(false);
  const [stream, setStream] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [saveRecording, setSaveRecording] = useState(false);
  const [recordingName, setRecordingName] = useState("");
  const [recordingDescription, setRecordingDescription] = useState("");
  const [saveLocation, setSaveLocation] = useState("");
  const [workspaceName, setWorkspaceName] = useState("");
  const [contentCid, setContentCid] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [btnloading, setbtnloading] = useState(false);
  const [btndisable, setbtndisable] = useState(false);
  const [showSaveBtn, setShowSaveBtn] = useState(false);
  const mediaRecorderRef = useRef(null);
  const videoRef = useRef(null);

  const navItems = [
    { label: "My Videos", page: "MyVideos" },
    { label: "Workspaces", page: "Workspaces" },
  ];

  const handleItemClick = (index, page) => {
    setActiveItem(index);
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "MyVideos":
        return <MyVideosPage />;
      case "Workspaces":
        return <WorkspacesPage />;
      default:
        return <MyVideosPage />;
    }
  };

  const { address } = useAccount();
  const walletAddress = address;
  // console.log(videoUrl)

  // const contentUpload = async () => {
  //   try {
  //     const url = videoUrl;

  //     const response = await fetch(url);
  //     const fileData = await response.blob();

  //     // Pack file data into a CAR and send to web3.storage
  //     const rootCid = await client.put([fileData], {
  //       name: 'cat pics',
  //       maxRetries: 3,
  //     });

  //     const res = await client.get(rootCid);
  //     const files = await res.files(fileData);
  //     for (const file of files) {
  //       setContentCid(`${file.cid}`);
  //       console.log(file.cid);
  //     }
  //   } catch (error) {
  //     console.error('Error occurred during content upload:', error);
  //     // Handle the error as needed
  //   }
  // };
  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const contentUpload = async () => {
    try {
      setbtnloading(true);
      setbtndisable(true);
      setIsLoading(true);
      const url = videoUrl;

      const response = await fetch(url);
      const fileData = await response.blob();

      const output = await lighthouse.upload(
        [fileData],
        "9b1684d2.b95aa6af776d47cea76040f4591e68ab",
        progressCallback
      );
      setContentCid(output.data.Hash);
      setIsLoading(false);
      setbtnloading(false);
      setbtndisable(false);
      // handleFormSubmit();
    } catch (error) {
      console.error("Error occurred during content upload:", error);
      setbtnloading(false);
      setbtndisable(false);
      // Handle the error as needed
    }
  };

  const handleNewVideoClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setVideoUrl(null);
    setSaveRecording(false);
    setShowSaveBtn(false);
  };

  const startRecording = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });

      const mediaRecorder = new MediaRecorder(mediaStream);
      mediaRecorderRef.current = mediaRecorder;

      const chunks = [];
      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        const videoUrl = URL.createObjectURL(blob);
        setVideoUrl(videoUrl);
        setRecording(false);
      };

      mediaRecorder.start();
      setRecording(true);
      setStream(mediaStream);
    } catch (error) {
      console.error("Error accessing screen:", error);
    }
  };

  const stopRecording = () => {
    setShowSaveBtn(true);
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setStream(null);
      setSaveRecording(false);
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://deloom.vercel.app/readworkspacedata",
  //         {
  //           params: {
  //             creatoraddress: walletAddress, // Replace with the actual creator address
  //           },
  //         }
  //       );
  //       console.log(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  function generateRandomId() {
    const length = 6; // Length of the random ID
    const characters = "0123456789"; // Characters to use for generating the ID
    let id = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
    }

    return id;
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Generate a random ID
    const randomId = generateRandomId();

    // Call contentUpload and wait for the contentCid to be generated
    console.log("uploading...");

    if (saveLocation === "personal") {
      console.log("inside personal");
      // Handle save in personal logic
      const requestData = {
        id: randomId,
        creator_address: walletAddress,
        video_name: recordingName,
        video_desc: recordingDescription,
        content_cid: contentCid,
      };

      // Make the API request for saving in personal
      axios
        .post("https://deloom.vercel.app/insertpersonal", requestData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (saveLocation === "workspace") {
      // Handle save in workspace logic
      const requestData = {
        id: randomId,
        creator_address: walletAddress,
        video_name: recordingName,
        video_desc: recordingDescription,
        workspace_name: workspaceName,
        content_cid: contentCid,
      };

      // Make the API request for saving in workspace
      axios
        .post("https://deloom.vercel.app/insertvideodata", requestData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Content CID not generated yet. Cannot submit form.");
    }
  };

  return (
    <>
      {/* <div className="dash-navbar-container">
        <div className="dash-navbar navInDashListItemsClass ">
          <div className="dash-navbar-names text-white">
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(index, item.page)}
                className={`${activeItem === index ? "active" : ""}`}
              >
                {item.label}
                <span className="underline"></span>
              </li>
            ))}
          </div>
          <button className="new-video-btn" onClick={handleNewVideoClick}>
            + New Video
          </button>
        </div>
        <div className="">{renderPage()}</div>
      </div> */}

      <div className="dash-navbar-container">
        <div className="dash-navbar navInDashListItemsClass">
          <div className="dash-navbar-names text-white">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(index, item.page)}
                className={`nav-button ${activeItem === index ? "active" : ""}`}
              >
                {item.label}
                <span className="underline"></span>
              </button>
            ))}
          </div>
          <button className="new-video-btn" onClick={handleNewVideoClick}>
            + New Video
          </button>
        </div>
        {/* <hr /> */}
        <div className="">{renderPage()}</div>
      </div>

      {popupOpen && (
        <div className="RecordingSaveFormDetailsClass  z-30 top-0 left-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="RecordingSaveFormDetailsClass-sub flex mx-auto p-6">
            <div className="saveRecordingPreview">
              <h3 className="text-lg  font-bold mb-4">Screen Recording</h3>

              {videoUrl ? (
                <video
                  className="my-3 h-[200px]"
                  ref={videoRef}
                  src={videoUrl}
                  controls
                  autoPlay
                />
              ) : (
                stream && <video ref={videoRef} srcObject={stream} autoPlay />
              )}

              {!recording ? (
                <button
                  className="startBtnClass px-4 py-2  text-white  mr-3"
                  onClick={startRecording}
                >
                  Start Recording
                </button>
              ) : (
                <button
                  className="stopBtnClass px-4 py-2 text-white  mr-3"
                  onClick={stopRecording}
                >
                  Stop Recording
                </button>
              )}

              {/* <button
                className="closePopupBtn px-4 py-2 text-white mr-3"
                onClick={handleClosePopup}
              >
                Close
              </button> */}

              {showSaveBtn && (
                <button
                  className="saveRecBtnClass px-4 py-2 text-white ml-2"
                  onClick={() => {
                    setSaveRecording(true);
                  }}
                >
                  Save
                </button>
              )}
            </div>
            <div className="saveRecordingForm">
              {saveRecording && (
                <div className="save-form">
                  <h3>Save Recording</h3>
                  <form onSubmit={handleFormSubmit}>
                    {/* <label htmlFor="recording-name">Name:</label> */}
                    <input
                      placeholder="Enter Name"
                      className="SaveRecordingInputFields"
                      id="recording-name"
                      type="text"
                      value={recordingName}
                      onChange={(e) => setRecordingName(e.target.value)}
                    />

                    {/* <label htmlFor="recording-description">Description:</label> */}
                    <input
                      placeholder="Enter Description..."
                      className="SaveRecordingInputFields"
                      id="recording-description"
                      type="textarea"
                      value={recordingDescription}
                      onChange={(e) => setRecordingDescription(e.target.value)}
                    />

                    {/* <label htmlFor="save-location">Save Location:</label> */}
                    <select
                      className="SaveRecordingInputFields"
                      id="save-location"
                      value={saveLocation}
                      onChange={(e) => setSaveLocation(e.target.value)}
                    >
                      <option value="">Select location</option>
                      <option value="personal">Save in Personal</option>
                      <option value="workspace">Save in Workspace</option>
                    </select>

                    {saveLocation === "workspace" && (
                      <div>
                        {/* <label htmlFor="workspace-name">Workspace Name:</label> */}
                        <input
                          placeholder="Enter Workspace Name"
                          className="SaveRecordingInputFields"
                          id="workspace-name"
                          type="text"
                          value={workspaceName}
                          onChange={(e) => setWorkspaceName(e.target.value)}
                        />
                      </div>
                    )}

                    {/* <button type="submit"onClick={()=>contentUpload()}> Submit</button> */}

                    <div className="flex  justify-end">
                      {contentCid ? (
                        <button type="submit">Submit</button>
                      ) : (
                        <button
                          type="submit"
                          className="flex"
                          onClick={contentUpload}
                          disabled={btndisable}
                        >
                          {btnloading ? (
                            <svg
                              width="48"
                              height="15"
                              viewBox="0 0 38 38"
                              xmlns="http://www.w3.org/2000/svg"
                              stroke="#fff"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <g transform="translate(1 1)" strokeWidth="4">
                                  <circle
                                    strokeOpacity=".5"
                                    cx="18"
                                    cy="18"
                                    r="18"
                                  />
                                  <path d="M36 18c0-9.94-8.06-18-18-18">
                                    <animateTransform
                                      attributeName="transform"
                                      type="rotate"
                                      from="0 18 18"
                                      to="360 18 18"
                                      dur="1s"
                                      repeatCount="indefinite"
                                    />
                                  </path>
                                </g>
                              </g>
                            </svg>
                          ) : (
                            <>
                              <img
                                src={uploadIcon}
                                className="h-[20px] w-[20px] mr-1"
                                alt=""
                              />
                              <span>Upload</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              )}
            </div>
            <button
              className=" absolute top-4 right-4 px-2 py-1 text-white"
              onClick={handleClosePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>

              {/* <img
                src={closeIcon}
                className="w-[35px] h-[35px] text-white"
                alt=""
              /> */}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.354 11.354l-2.12 2.12L8 10.121l-1.233 1.233-2.121-2.12L5.88 8 4.647 6.766l2.12-2.121L8 5.88l1.233-1.233 2.121 2.12L10.12 8l1.234 1.234z" />
              </svg> */}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationInDash;

// import React, { useState, useRef } from "react";
// import MyVideosPage from "./MyVideosPage";
// import WorkspacesPage from "./WorkspacesPage";
// import "../../styles/dashboard/NavigationInDash.css";
// // import "../../styles/dashboard/Popup.css";
// const NavigationInDash = () => {
//   const [activeItem, setActiveItem] = useState(0);
//   const [currentPage, setCurrentPage] = useState("MyVideos");
//   const [popupOpen, setPopupOpen] = useState(false);
//   const [recording, setRecording] = useState(false);
//   const [stream, setStream] = useState(null);
//   const [videoUrl, setVideoUrl] = useState(null);
//   const mediaRecorderRef = useRef(null);
//   const videoRef = useRef(null);

//   const navItems = [
//     { label: "My Videos", page: "MyVideos" },
//     { label: "Workspaces", page: "Workspaces" },
//   ];

//   const handleItemClick = (index, page) => {
//     setActiveItem(index);
//     setCurrentPage(page);
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case "MyVideos":
//         return <MyVideosPage />;
//       case "Workspaces":
//         return <WorkspacesPage />;
//       default:
//         return <MyVideosPage />;
//     }
//   };

//   const handleNewVideoClick = () => {
//     setPopupOpen(true);
//   };

//   const handleClosePopup = (e) => {
//     setPopupOpen(false);
//     setVideoUrl(null);
//   };

//   const startRecording = async () => {
//     try {
//       const mediaStream = await navigator.mediaDevices.getDisplayMedia({
//         video: true,
//         audio: true,
//       });

//       const mediaRecorder = new MediaRecorder(mediaStream);
//       mediaRecorderRef.current = mediaRecorder;

//       const chunks = [];
//       mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
//       mediaRecorder.onstop = () => {
//         const blob = new Blob(chunks, { type: "video/webm" });
//         const videoUrl = URL.createObjectURL(blob);
//         setVideoUrl(videoUrl);
//         setRecording(false);
//       };

//       mediaRecorder.start();
//       setRecording(true);
//       setStream(mediaStream);
//     } catch (error) {
//       console.error("Error accessing screen:", error);
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorderRef.current) {
//       mediaRecorderRef.current.stop();
//       setStream(null);
//     }
//   };

//   return (
//     <>
//       <div className="dash-navbar-container">
//         <ul className="dash-navbar">
//           <div className="dash-navbar-names">
//             {navItems.map((item, index) => (
//               <li
//                 key={index}
//                 onClick={() => handleItemClick(index, item.page)}
//                 className={activeItem === index ? "active" : ""}
//               >
//                 {item.label}
//                 <span className="underline"></span>
//               </li>
//             ))}
//           </div>
//           <button className="new-video-btn" onClick={handleNewVideoClick}>
//             New Video
//           </button>
//         </ul>
//         <div className="">{renderPage()}</div>
//       </div>
//       {popupOpen && (
//         <div className="fixed z-30 top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-75">
//           <div className="max-w-md mx-auto bg-white rounded-lg p-6">
//             <h3 className="text-lg text-black font-bold mb-4">
//               Screen Recording
//             </h3>

//             {videoUrl ? (
//               <video
//                 className="my-3"
//                 ref={videoRef}
//                 src={videoUrl}
//                 controls
//                 autoPlay
//               />
//             ) : (
//               stream && <video ref={videoRef} srcObject={stream} autoPlay />
//             )}

//             {!recording ? (
//               <button
//                 className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
//                 onClick={startRecording}
//               >
//                 Start Recording
//               </button>
//             ) : (
//               <button
//                 className="px-4 py-2 bg-red-500 text-white rounded mr-2"
//                 onClick={stopRecording}
//               >
//                 Stop Recording
//               </button>
//             )}
//             <button
//               className="px-4 py-2 bg-gray-500 text-white rounded"
//               onClick={handleClosePopup}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default NavigationInDash;

import React, { useState, useRef } from "react";
import MyVideosPage from "./MyVideosPage";
import WorkspacesPage from "./WorkspacesPage";
import "../../styles/dashboard/NavigationInDash.css";

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    // You can access the recordingName, recordingDescription, and saveLocation values from the respective state variables
  };

  return (
    <>
      <div className="dash-navbar-container">
        <ul className="dash-navbar">
          <div className="dash-navbar-names">
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(index, item.page)}
                className={activeItem === index ? "active" : ""}
              >
                {item.label}
                <span className="underline"></span>
              </li>
            ))}
          </div>
          <button className="new-video-btn" onClick={handleNewVideoClick}>
            New Video
          </button>
        </ul>
        <div className="">{renderPage()}</div>
      </div>
      {popupOpen && (
        <div className="fixed z-30 top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-75">
          <div className="max-w-md mx-auto bg-white rounded-lg p-6">
            <h3 className="text-lg text-black font-bold mb-4">
              Screen Recording
            </h3>

            {videoUrl ? (
              <video
                className="my-3"
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
                className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                onClick={startRecording}
              >
                Start Recording
              </button>
            ) : (
              <button
                className="px-4 py-2 bg-red-500 text-white rounded mr-2"
                onClick={stopRecording}
              >
                Stop Recording
              </button>
            )}

            <button
              className="px-4 py-2 bg-gray-500 text-white rounded"
              onClick={handleClosePopup}
            >
              Close
            </button>

            {showSaveBtn && (
              <button
                className="px-4 py-2 bg-green-500 text-white rounded ml-2"
                onClick={() => {
                  setSaveRecording(true);
                }}
              >
                Save
              </button>
            )}

            {saveRecording && (
              <div className="save-form">
                <h3>Save Recording</h3>
                <form onSubmit={handleFormSubmit}>
                  <label htmlFor="recording-name">Name:</label>
                  <input
                    placeholder="Enter Name"
                    className="SaveRecordingInputFields"
                    id="recording-name"
                    type="text"
                    value={recordingName}
                    onChange={(e) => setRecordingName(e.target.value)}
                  />

                  <label htmlFor="recording-description">Description:</label>
                  <input
                    placeholder="Enter Description..."
                    className="SaveRecordingInputFields"
                    id="recording-description"
                    type="textarea"
                    value={recordingDescription}
                    onChange={(e) => setRecordingDescription(e.target.value)}
                  />

                  <label htmlFor="save-location">Save Location:</label>
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

                  <button type="submit">Save</button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationInDash;

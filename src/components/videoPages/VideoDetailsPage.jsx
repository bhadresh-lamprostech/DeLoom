import React from "react";
import { useLocation } from "react-router-dom";
import "../../styles/videoPages/VideoDetailsPage.css";

function VideoDetailsPage() {
  const location = useLocation();
  const videoId = location.state.data;
  console.log(videoId)

  return (
    // <div className="videoDetailsMainClass bg-[#ff83a5]">
    // <div className="videoDetailsMainClass bg-[#ff206e]">
    <div className="videoDetailsMainClass bg-[#ffffff]">
      <div className="video-container">
        <div className="iframeforborder">
          <iframe
            className="iframeMainClass"
            src={`https://gateway.lighthouse.storage/ipfs/${videoId.content_cid}`} // Change with our link
            // `https://gateway.lighthouse.storage/ipfs/${video.content_cid}`
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* <div className="video-details p-4">
        <h4>{videoId.workspaceName}</h4>
        <h4>{videoId.title}</h4>
        <p>{videoId.description}</p>
      </div> */}
      <div className="video-details">
        <h4 className="workspace-name">{videoId.workspaceName}</h4>
        <h4 className="title">{videoId.title}</h4>
        <p className="description">{videoId.description}</p>
      </div>
      <div className="comment-section">
        {/* Add your comment section components here */}
      </div>
    </div>
  );
}

export default VideoDetailsPage;

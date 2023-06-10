import React from "react";

const VideoDetailsPage = ({ video }) => {
  return (
    <div className="video-details-page">
      <div className="video-frame">
        {/* Video player component */}
        <video src={video.videoUrl} controls width="100%" height="100%" />
      </div>
      <div className="video-details">
        <h2 className="video-title">{video.title}</h2>
        <p className="video-description">{video.description}</p>
      </div>
      <div className="comment-section">
        {/* Comment section component */}
        {/* Place your comment section component code here */}
      </div>
    </div>
  );
};

export default VideoDetailsPage;

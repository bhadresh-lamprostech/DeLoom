// import React from "react";
// import { useParams, useLocation } from "react-router-dom";
// import "../../styles/videoPages/VideoDetailsPage.css";

// const VideoDetailsPage = () => {
//   const { videoId } = useParams();
//   const location = useLocation();
//   const { videoUrl } = location.state;

//   return (
//     <div className="video-details-page">
//       <div className="video-frame">
//         {/* Video player component */}
//         <video src={videoUrl} controls width="100%" height="100%" />
//       </div>
//       <div className="video-details">
//         <h2 className="video-title">{video.title}</h2>
//         <p className="video-description">{video.description}</p>
//       </div>
//       <div className="comment-section">
//         {/* Comment section component */}
//         {/* Place your comment section component code here */}
//       </div>
//     </div>
//   );
// };

// export default VideoDetailsPage;

// import React from "react";
// import { useParams, useLocation } from "react-router-dom";
// import "../../styles/videoPages/VideoDetailsPage.css";

// const VideoDetailsPage = ({ video }) => {
//   const { videoId } = useParams();
//   const location = useLocation();
//   const { videoUrl } = location.state;

//   return (
//     <div className="video-details-page">
//       <div className="video-frame">
//         <video src={videoUrl} controls width="100%" height="100%" />
//       </div>
//       <div className="video-details">
//         <h2 className="video-title">{video.title}</h2>
//         <p className="video-description">{video.description}</p>
//       </div>
//       <div className="comment-section">
//       </div>
//     </div>
//   );
// };

// export default VideoDetailsPage;

import React from "react";

const VideoDetail = (props) => {
  return (
    <div className="bg-[#1c1c24] text-white">
      <h2>Video Detail</h2>
      {/* Render the video details */}
      <p>Video URL: {props.videoUrl}</p>
      {/* Add other video details as needed */}
    </div>
  );
};

export default VideoDetail;

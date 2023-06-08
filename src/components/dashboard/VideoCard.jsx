import React from "react";
import "../../styles/dashboard/VideoCard.css";

// const VideoCard = ({ title, description }) => {
//   return (
//     <div className="video-card">
//       <div className="video-card-header">
//         <h3 className="video-card-title">{title}</h3>
//         <div className="video-card-options">
//           {/* Three dots options */}
//           <div className="dots-menu">
//             <div className="dot"></div>
//             <div className="dot"></div>
//             <div className="dot"></div>
//           </div>
//         </div>
//       </div>
//       <p className="video-card-description">{description}</p>
//       <button className="view-more-button">View More</button>
//     </div>
//   );
// };

const VideoCard = ({ title, description, thumbnail }) => {
  return (
    <div className="video-card">
      <div className="video-thumbnail">
        <img src={thumbnail} alt="Video Thumbnail" />
      </div>
      <div className="video-card-details">
        <h3 className="video-card-title">{title}</h3>
        <p className="video-card-description">{description}</p>
        <button className="view-more-button">View More</button>
      </div>
    </div>
  );
};

export default VideoCard;

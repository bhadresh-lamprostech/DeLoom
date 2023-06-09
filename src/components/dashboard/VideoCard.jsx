import React from "react";
import "../../styles/dashboard/VideoCard.css";
import VideoCard2 from "./VideoCard2";

const VideoCard = ({ title, description, thumbnail, videos }) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoCard2 key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoCard;

import React from "react";
import VideoCard from "./VideoCard";

function MyVideosPage() {
  const videos = [
    {
      id: 1,
      title: "Video 1",
      description: "Description 1",
      thumbnail: "https://example.com/thumbnail2.jpg",
    },
    {
      id: 2,
      title: "Video 2",
      description: "Description 2",
      thumbnail: "https://example.com/thumbnail2.jpg",
    },
    {
      id: 3,
      title: "Video 3",
      description: "Description 3",
      thumbnail: "https://example.com/thumbnail2.jpg",
    },
    {
      id: 4,
      title: "Video 4",
      description: "Description 4",
      thumbnail: "https://example.com/thumbnail2.jpg",
    },
    {
      id: 5,
      title: "Video 5",
      description: "Description 5",
      thumbnail: "https://example.com/thumbnail2.jpg",
    },
    {
      id: 6,
      title: "Video 6",
      description: "Description 6",
      thumbnail: "https://example.com/thumbnail2.jpg",
    },
    // Add more video objects as needed
  ];

  return (
    <div className="video-page">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          title={video.title}
          description={video.description}
          thumbnail={video.thumbnail}
        />
      ))}
    </div>
  );
}

export default MyVideosPage;

import React from "react";
import VideoCard from "./VideoCard";
import "../../styles/dashboard/MyVideosPage.css";

function MyVideosPage() {
  const videos = [
    {
      id: 1,
      title: "Video 1",
      description: "Description 1",
      thumbnail: "src/assets/images/profilePhoto.jpg",
    },
    {
      id: 2,
      title: "Video 2",
      description: "Description 2",
      thumbnail: "src/assets/images/profilePhoto.jpg",
    },
    {
      id: 3,
      title: "Video 3",
      description: "Description 3",
      thumbnail: "src/assets/images/profilePhoto.jpg",
    },
    {
      id: 4,
      title: "Video 4",
      description: "Description 4",
      thumbnail: "src/assets/images/profilePhoto.jpg",
    },
    {
      id: 5,
      title: "Video 5",
      description: "Description 5",
      thumbnail: "src/assets/images/profilePhoto.jpg",
    },
    {
      id: 6,
      title: "Video 6",
      description: "Description 6",
      thumbnail: "src/assets/images/profilePhoto.jpg",
    },
    // Add more video objects as needed
  ];

  return (
    // <div className="video-page mt-4">
    //   {videos.map((video) => (
    //     <VideoCard
    //       key={video.id}
    //       title={video.title}
    //       description={video.description}
    //       thumbnail={video.thumbnail}
    //     />
    //   ))}
    // </div>

    <div className="video-page mt-4">
      <div className="video-page-container">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            description={video.description}
            thumbnail={video.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}

export default MyVideosPage;

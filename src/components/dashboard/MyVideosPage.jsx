import React from "react";
import VideoCard from "./VideoCard";
import "../../styles/dashboard/MyVideosPage.css";

function MyVideosPage() {
  const videos = [
    {
      id: 1,
      title: "Video 1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non, ea consequuntur possimus dolores qui, temporibus aliquam saepe quibusdam quisquam assumenda error officia, obcaecati odit iusto eum maiores accusantium culpa!",
      thumbnail: "src/assets/images/profilePhoto.jpg",
    },
    {
      id: 2,
      title: "Video 2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non, ea consequuntur possimus dolores qui, temporibus aliquam saepe quibusdam quisquam assumenda error officia, obcaecati odit iusto eum maiores accusantium culpa!",
      thumbnail: "src/assets/images/profilePhoto.jpg",
    },
    {
      id: 3,
      title: "Video 3",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non, ea consequuntur possimus dolores qui, temporibus aliquam saepe quibusdam quisquam assumenda error officia, obcaecati odit iusto eum maiores accusantium culpa!",
      thumbnail: "src/assets/images/profilePhoto.jpg",
    },
    {
      id: 4,
      title: "Lorem, ipsum dolor sit amet consectetur adip",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non, ea consequuntur possimus dolores qui, temporibus aliquam saepe quibusdam quisquam assumenda error officia, obcaecati odit iusto eum maiores accusantium culpa!",
      thumbnail: "src/assets/images/profilePhoto.jpg",
    },
    {
      id: 5,
      title: "Video 5",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non, ea consequuntur possimus dolores qui, temporibus aliquam saepe quibusdam quisquam assumenda error officia, obcaecati odit iusto eum maiores accusantium culpa!",
      thumbnail: "src/assets/images/profilePhoto.jpg",
    },
    {
      id: 6,
      title: "Video 6",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non, ea consequuntur possimus dolores qui, temporibus aliquam saepe quibusdam quisquam assumenda error officia, obcaecati odit iusto eum maiores accusantium culpa!",
      thumbnail: "src/assets/images/profilePhoto.jpg",
    },
    // Add more video objects as needed
  ];

  return (
    <>
      <div className="video-page mt-4">
        <div className="video-page-container">
          <VideoCard videos={videos} />
        </div>
      </div>
    </>
  );
}

export default MyVideosPage;

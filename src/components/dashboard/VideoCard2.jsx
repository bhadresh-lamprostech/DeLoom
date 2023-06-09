import React, { useState, useEffect } from "react";
import "../../styles/dashboard/VideoCard2.css";

const VideoCard2 = ({ video }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".video-card")) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showMenu]);

  return (
    <div className="video-card">
      <div className="menu-icon" onClick={handleMenuClick}>
        <svg
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="19" cy="12" r="1.5" />
          <circle cx="5" cy="12" r="1.5" />
        </svg>
      </div>
      {showMenu && (
        <>
          {/* <div className="backdrop" onClick={() => setShowMenu(false)}></div> */}
          <div className="menu-options">
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        </>
      )}
      <div className="thumbnail">
        <img src={video.thumbnail} alt={video.title} />
      </div>
      <div className="details text-black">
        <h4 className="video-title-mainClass">{video.title}</h4>
        <p className="video-desc-mainClass">{video.description}</p>
      </div>
      <div className="actions">
        <button className="view-more-button">
          <p>Open</p>
          <svg
            strokeWidth="4"
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VideoCard2;

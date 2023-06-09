import React, { useState } from "react";
import MyVideosPage from "./MyVideosPage";
import WorkspacesPage from "./WorkspacesPage";
import "../../styles/dashboard/NavigationInDash.css";

const NavigationInDash = () => {
  const [activeItem, setActiveItem] = useState(0); // Set the initial active item index
  const [currentPage, setCurrentPage] = useState("MyVideos"); // Set the initial page

  // Define the navigation items
  const navItems = [
    { label: "My Videos", page: "MyVideos" },
    { label: "Workspaces", page: "Workspaces" },
    // Add more items here in the same format: { label: 'Item Name', page: 'PageComponent' }
  ];

  // Handle item click event
  const handleItemClick = (index, page) => {
    setActiveItem(index);
    setCurrentPage(page);
  };

  // Render the current page component
  const renderPage = () => {
    switch (currentPage) {
      case "MyVideos":
        return <MyVideosPage />;
      case "Workspaces":
        return <WorkspacesPage />;
      // Add more cases here for additional pages
      default:
        return <MyVideosPage />;
    }
  };

  const handleNewVideoClick = () => {
    // Handle the click event for "New Videos" button
    console.log("New Videos button clicked");
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
    </>
  );
};

export default NavigationInDash;

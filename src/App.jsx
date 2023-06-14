import React, { useState, useEffect } from "react";
// import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

import { Sidebar, Navbar } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
import LandingPage from "./pages/Landingpage";
import RegForm from "./pages/RegForm";
import UserProfile from "./pages/UserProfile";
import MainDashboard from "./components/dashboard/MainDashboard";
import WorkspacesPage from "./components/dashboard/WorkspacesPage";
import CreateWorkspace from "./pages/CreateWorkspace";
import UserWorkspace from "./pages/UserWorkspace";
import VideoDetailsPage from "./components/videoPages/VideoDetailsPage";
// import VideoDetail from "./components/videoPages/VideoDetailsPage";

const App = () => {
  const location = useLocation();

  // Check if the current route is the landing page
  const isLandingPage = location.pathname === "/landing";

  const [videos, setVideos] = useState([]); // Assuming you have a videos array

  useEffect(() => {
    // Fetch the videos from your data source and update the videos state
    const fetchVideos = async () => {
      try {
        // Fetch the videos data from your data source (e.g., API)
        const response = await fetch("your-api-endpoint-for-videos");
        const data = await response.json();

        // Update the videos state with the fetched data
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <>
      <div className="relative sm:-8 bg-[#ff83a5] min-h-screen flex flex-row">
        {/* Render the Sidebar component only if not on the landing page */}
        {!isLandingPage && (
          <div className="sm:flex hidden mr-2 relative">
            <Sidebar />
          </div>
        )}

        <div className="flex-1 max-sm:w-full mac-w-[1280px] mx-auto">
          {/* Render the Navbar component only if not on the landing page */}
          {!isLandingPage && <Navbar />}
          <Routes>
            {/* Other routes */}
            <Route path="/" element={<Navigate to="/landing" />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/library" element={<MainDashboard />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/workspace" element={<WorkspacesPage />} />
            <Route path="/create-workspace" element={<CreateWorkspace />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/campaign-details/:id" element={<CampaignDetails />} />
            <Route path="/reg-form" element={<RegForm />} />
            <Route path="/profile-page" element={<UserProfile />} />
            <Route path="/workspace-page" element={<UserWorkspace />} />
            <Route
              path="/video-page/:videoId"
              element={<VideoDetailsPage videos={videos} />}
            />

            {/* <Route
              path="/video-page/:videoId"
              component={<VideoDetailsPage />}
            /> */}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;

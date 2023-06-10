import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
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

const App = () => {
  const location = useLocation();

  // Check if the current route is the landing page
  const isLandingPage = location.pathname === "/landing";

  return (
    <>
      <div className="relative sm:-8 bg-[#13131a] min-h-screen flex flex-row">
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
            <Route path="/video-page/" element={<VideoDetailsPage />} />
            {/* <Route path="/video-page/:videoId" element={<VideoDetailsPage />} /> */}
          </Routes>
        </div>
      </div>
      {/* <WorkspacesPage /> */}
    </>
  );
};

export default App;

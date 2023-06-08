// import React from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import { Sidebar, Navbar } from "./components";
// import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
// import LandingPage from "./pages/Landingpage";

// const App = () => {
//   return (
//     <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
//       <div className="sm:flex hidden mr-10 relative">
//         <Sidebar />
//       </div>
//       <div className="flex-1 max-sm:w-full mac-w-[1280px] mx-auto sm:pr-5">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Navigate to="/landing" />} />
//           <Route path="/landing" element={<LandingPage />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/create-campaign" element={<CreateCampaign />} />
//           <Route path="/campaign-details/:id" element={<CampaignDetails />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Sidebar, Navbar } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
import LandingPage from "./pages/Landingpage";
import RegForm from "./pages/RegForm";
import UserProfile from "./pages/UserProfile";

const App = () => {
  const location = useLocation();

  // Check if the current route is the landing page
  const isLandingPage = location.pathname === "/landing";

  return (
    <div className="relative sm:-8 bg-[#13131a] min-h-screen flex flex-row">
      {/* Render the Sidebar component only if not on the landing page */}
      {!isLandingPage && (
        <div className="sm:flex hidden mr-5 relative">
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
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/reg-form" element={<RegForm />} />
          <Route path="/profile-page" element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

// import React from "react";
// import { Route, Routes, Navigate, useLocation } from "react-router-dom";
// import { Sidebar, Navbar } from "./components";
// import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
// import LandingPage from "./pages/Landingpage";

// const App = () => {
//   const location = useLocation();

//   // Check if the current route is the landing page
//   const isLandingPage = location.pathname === "/landing";

//   return (
//     <div className={`relative ${isLandingPage ? "" : "sm:-8"} bg-[#13131a] min-h-screen flex flex-row`}>
//       {/* Render the Sidebar component only if not on the landing page */}
//       {!isLandingPage && (
//         <div className="sm:flex p-4 hidden mr-10 relative">
//           <Sidebar />
//         </div>
//       )}

//       <div className={`flex-1 max-sm:w-full ${isLandingPage ? "" : "mac-w-[1280px] mx-auto sm:pr-5"}`}>
//         {/* Render the Navbar component only if not on the landing page */}
//         {!isLandingPage && <Navbar />}

//         <Routes>
//           <Route path="/" element={<Navigate to="/landing" />} />
//           <Route path="/landing" element={<LandingPage />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/create-campaign" element={<CreateCampaign />} />
//           <Route path="/campaign-details/:id" element={<CampaignDetails />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import "../../styles/dashboard/MainDashboard.css";
import NavigationInDash from "./NavigationInDash";

function MainDashboard() {
  return (
    <>
      {/* <div className="DashboardPageMainClass bg-white text-black"> */}
      <div className="DashboardPageMainClass text-white">
        <div className="Dashboard-head">
          <b className="Dashboard-head-name">My Library</b>
        </div>
        <div className="mt-3 mb-3">
          <hr />
        </div>
        <>
          <NavigationInDash />
        </>
      </div>
    </>
  );
}

export default MainDashboard;

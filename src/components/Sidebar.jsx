import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo, sun, profile, vidWeaveLogo } from "../assets";
import { navlinks } from "../constants";
import "../styles/sidebar/Sidebar.css";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handelclick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive && isActive === name && "bg-[#f0f8cae3]"
    } flex justify-center
items-center ${!disabled && "cursor-pointer"} ${styles}`}
    onClick={handelclick}
  >
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img
        src={imgUrl}
        alt="fund_logo"
        className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
      />
    )}
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <div className="p-3">
      <div className="flex justify-between item-center flex-col sticky top-5 h-[93vh]">
        <Link to="/">
          {/* <Icon styles="w-[52px] h-[52px] bg-[32c2f32]" imgUrl={vidWeaveLogo} /> */}
          <Icon
            className="vidWeaveLogoMainClass"
            styles="w-[76px] h-[68px] bg-[32c2f32]"
            imgUrl={vidWeaveLogo}
          />
        </Link>
        <div
          className="sidbarMainBg flex-1 flex flex-col justify-between items-center bg-[#ffffff]
        rounded-[20px] w-[76px] py-4 mt-12"
        >
          <div className="flex flex-col justify-center items-center gap-3">
            {navlinks.map((link) => (
              <Icon
                key={link.name}
                {...link}
                isActive={isActive}
                handelclick={() => {
                  if (!link.disabled) {
                    setIsActive(link.name);
                    navigate(link.link);
                  }
                }}
              />
            ))}
          </div>
          <Icon
            styles="bg-[#f0f8ca]  shadow-secondary"
            handelclick={() => {
              navigate("/profile-page");
            }}
            imgUrl={profile}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

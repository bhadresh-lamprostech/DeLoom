import React from "react";
import { motion } from "framer-motion";
import "./LandingPage.css";
import heroicon from "../../assets/heroicon.svg";
import { useNavigate } from "react-router-dom";

const LandingPageHero = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="dark:bg-gray-200 dark:text-gray-100 min-h-screen weavebg">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left lg:order-1">
            <h1 className="h1-bg">
              <motion.img
                className="MainLogoClassVW mx-auto mb-8 sm:mx-0 sm:mb-12"
                src="src/assets/VidWeave.png"
                alt="VidWeave Logo"
                style={{ transform: "scale(1.2)" }} // Adjust the scale factor as per your preference
              />
            </h1>
            <p className="mt-6 mb-8 text-lg font-semibold text-gray-800 sm:mb-12">
              Welcome to VidWeave, the decentralized video sharing platform that puts you in control. With VidWeave, you can create and share videos securely and directly, without intermediaries or centralized control. Empower yourself with privacy, ownership, and a seamless user experience. Join VidWeave and be part of the decentralized video revolution.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button
                type="button"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 text-lg font-semibold text-gray-800 bg-white hover:bg-rose-200 transition-colors duration-300 rounded-md shadow"
                onClick={() => {
                  navigate("/home");
                }}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 lg:order-2">
            <motion.img
              src={heroicon}
              alt="logo of vidweave"
              className="object-contain w-full h-auto max-h-96 sm:max-h-80 lg:max-h-96 xl:max-h-112 2xl:max-h-128"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <div className="wavea"></div>
        <div className="wavea"></div>
        <div className="wavea"></div>
      </section>
    </div>
  );
};

export default LandingPageHero;

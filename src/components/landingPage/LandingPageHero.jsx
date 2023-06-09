import React from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';
import heroicon from '../../assets/heroicon.svg';

const LendingPageHero = () => {
  return (
    <div>
      <section className="dark:bg-gray-200 dark:text-gray-100 h-full weavebg">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Vid<span className="dark:text-green-400">Weave</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Description (Introducing the decentralized loom—a groundbreaking technology that puts users in control. Built on blockchain and distributed ledger principles, it enables secure data storage, seamless communication, and peer-to-peer transactions. Say goodbye to intermediaries and embrace a new era of digital empowerment)
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-green-400 dark:text-gray-900 hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
            <motion.img
              src={heroicon}
              alt="logo of vidweave"
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <div className="wavea"></div>
        <div className="wavea"></div>
        <div className="wavea"></div>
      </section>

      <footer className="bg-gray-800 py-4 text-white text-center">
        <p>&copy; {new Date().getFullYear()} VidWeave. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LendingPageHero;

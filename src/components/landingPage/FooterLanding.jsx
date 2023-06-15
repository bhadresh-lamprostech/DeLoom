import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/VidWeave.png'; // Import the website logo image

function FooterLanding() {
  return (
    <section>
      <div className="bg-gray-800 py-20 text-white footerbg">
        <div className="flex justify-between items-start">
          <div className="ml-4">
            <img src={logo} alt="Website Logo" className="h-16" /> {/* Add the website logo */}

            <p>
              Take control of your data and privacy<br /> while revolutionizing the way we connect and create
            </p>
            <br />
            <div className="flex space-x-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          <div>
            <img src="src/assets/footer.png" alt="Footer Image" className="h-44 mr-4 footerimg" /> {/* Add the image */}
          </div>
        </div>

        {/* Content div containing links */}
        <div className="flex justify-center mt-8"><h2> Links</h2>
          <ul><li href="/signup" className="mr-4">
            Sign Up
          </li>
          <li href="/services" className="mr-4">
            Services
          </li>
          <li href="/contact" className="mr-4">
            Contact Us</li>
            <li href="/contact" className="mr-4">
            Contact Us</li>
            <li href="/contact" className="mr-4">
            Contact Us</li>
            </ul>
        </div>

        <p className="text-center text-sm mt-4">&copy; {new Date().getFullYear()} VidWeave. All Rights Reserved.</p>
      </div>
    </section>
  );
}

export default FooterLanding;

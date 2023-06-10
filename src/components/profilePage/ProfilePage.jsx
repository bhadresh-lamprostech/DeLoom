import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/profilePage/ProfilePage.css";
import { useAccount } from "wagmi";

function ProfilePage() {
  const [userProfile, setUserProfile] = useState(null);
  const { address } = useAccount();

  const handleCreateWorkspace = () => {
    navigate("/create-workspace");
    console.log("Creating workspace...");
  };
  const walletAddress = address;
  console.log(walletAddress);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/readdata?address=${walletAddress}`
        );
        setUserProfile(response.data[0]); // Access the first object in the array
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <>
      <div className="ProfilePageMainClass bg-[#1c1c24] text-white">
        {/* <div className="ProfilePageMainClass bg-white text-black"> */}
        {userProfile ? (
          <div>
            {/* <h2>Personal Profile</h2> */}
            <div className="ProfileHead">PERSONAL PROFILE</div>
            <div className="ProfilePhotoClass">
              <img
                src={"https://" + `${userProfile.logocid}` + ".ipfs.w3s.link"}
                // src='https://"${userProfile.logocid}"'
                alt="Profile"
                className="profile-photo"
              />
            </div>
            <div className="UserProfileDetails">
              <h2>
                <b>Name: </b> {userProfile.firstname} {userProfile.lastname}
              </h2>
              <h2>
                <b>Username: </b> {userProfile.username}
              </h2>
              <p>
                <b>Contact Info: </b> {userProfile.email}
              </p>
            </div>
            <hr />
            <div className="createWSClass">
              <button
                className="createWorkspaceBtn"
                onClick={handleCreateWorkspace}
              >
                Create Workspace
              </button>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

export default ProfilePage;

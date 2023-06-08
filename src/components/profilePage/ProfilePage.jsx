import React from "react";
import "../../styles/profilePage/ProfilePage.css";

function ProfilePage() {
  const userProfile = {
    name: "John Doe",
    username: "john012",
    contactInfo: "john.doe@example.com",
    profilePhoto: "src/assets/images/profilePhoto.jpg",
  };

  const handleCreateWorkspace = () => {
    console.log("Creating workspace...");
  };

  return (
    <>
      <div className="ProfilePageMainClass text-white">
        {/* <div className="ProfilePageMainClass bg-white text-black"> */}
        <div>
          {/* <h2>Personal Profile</h2> */}
          <div className="ProfileHead">PERSONAL PROFILE</div>
          <div className="ProfilePhotoClass">
            <img
              src={userProfile.profilePhoto}
              alt="Profile"
              className="profile-photo"
            />
          </div>
          <div className="UserProfileDetails">
            <h2>
              <b>Name: </b> {userProfile.name}
            </h2>
            <h2>
              <b>Username: </b> {userProfile.username}
            </h2>
            <p>
              <b>Contact Info: </b> {userProfile.contactInfo}
            </p>
          </div>
          <hr />
          <div className="createWSClass">
            <button
              className="createWorkspaceBtn"
              onClick={() => {
                handleCreateWorkspace();
              }}
            >
              Create Workspace
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;

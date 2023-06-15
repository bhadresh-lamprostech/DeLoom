import React, { useState, useEffect } from "react";
import "../../styles/workspace/WorkspaceMainPage.css";
import { TbCopy } from "react-icons/tb";
import { TbCheck } from "react-icons/tb";
import { RxCheckbox } from "react-icons/rx";
import { MdOutlineCheckCircle } from "react-icons/md";

function WorkspaceMainPage() {
  const [workspaceCopied, setWorkspaceCopied] = useState(false);
  const [copiedUserIndex, setCopiedUserIndex] = useState(null);

  const [userData, setUserData] = useState({
    workspaceName: "My Workspace",
    email: "user@example.com",
    walletAddress: "0x3013bb4E03a7B81106D69C1071aE148C8410E1",
    workspaceLogoUrl: "src/assets/images/profilePhoto.jpg",
    users: [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        profileLogo: "src/assets/images/profilePhoto.jpg",
        walletAddress: "0x3013bb4E03a7B81106D69C1071aE148C8410E2",
        copied: false,
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        profileLogo: "src/assets/images/profilePhoto.jpg",
        walletAddress: "0x3013bb4E03a7B81106D69C1071aE148C8410E3",
        copied: false,
      },
      {
        name: "John Doe",
        email: "john.doe@example.com",
        profileLogo: "src/assets/images/profilePhoto.jpg",
        walletAddress: "0x3013bb4E03a7B81106D69C1071aE148C8410E2",
        copied: false,
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        profileLogo: "src/assets/images/profilePhoto.jpg",
        walletAddress: "0x3013bb4E03a7B81106D69C1071aE148C8410E3",
        copied: false,
      },
      {
        name: "John Doe",
        email: "john.doe@example.com",
        profileLogo: "src/assets/images/profilePhoto.jpg",
        walletAddress: "0x3013bb4E03a7B81106D69C1071aE148C8410E2",
        copied: false,
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        profileLogo: "src/assets/images/profilePhoto.jpg",
        walletAddress: "0x3013bb4E03a7B81106D69C1071aE148C8410E3",
        copied: false,
      },
      {
        name: "John Doe",
        email: "john.doe@example.com",
        profileLogo: "src/assets/images/profilePhoto.jpg",
        walletAddress: "0x3013bb4E03a7B81106D69C1071aE148C8410E2",
        copied: false,
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        profileLogo: "src/assets/images/profilePhoto.jpg",
        walletAddress: "0x3013bb4E03a7B81106D69C1071aE148C8410E3",
        copied: false,
      },
      {
        name: "John Doe",
        email: "john.doe@example.com",
        profileLogo: "src/assets/images/profilePhoto.jpg",
        walletAddress: "0x3013bb4E03a7B81106D69C1071aE148C8410E2",
        copied: false,
      },
    ],
  });

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      if (index === -1) {
        setWorkspaceCopied(true);
        setTimeout(() => {
          setWorkspaceCopied(false);
        }, 2000);
      } else {
        const updatedUsers = userData.users.map((user, i) => {
          if (i === index) {
            return {
              ...user,
              copied: true,
            };
          }
          return user;
        });
        setUserData((prevUserData) => ({
          ...prevUserData,
          users: updatedUsers,
        }));
        setCopiedUserIndex(index);
        setTimeout(() => {
          setCopiedUserIndex(null);
        }, 2000);
      }
    });
  };

  useEffect(() => {
    if (copiedUserIndex !== null) {
      const userTimer = setTimeout(() => {
        setCopiedUserIndex(null);
        console.log("ffffffffff");
      }, 2000);

      return () => {
        clearTimeout(userTimer);
      };
    }
  }, [copiedUserIndex]);

  useEffect(() => {
    if (workspaceCopied) {
      const workspaceTimer = setTimeout(() => {
        setWorkspaceCopied(false);
      }, 2000);

      return () => {
        clearTimeout(workspaceTimer);
      };
    }
  }, [workspaceCopied]);

  const renderWalletAddress = (address) => {
    const firstChars = address.slice(0, 6);
    const lastChars = address.slice(-4);
    return `${firstChars}••••${lastChars}`;
  };

  return (
    <>
      {/* <div className="WorkspacePageMainClass bg-[#ffbd429d] text-black"> */}
      <div className="WorkspacePageMainClass text-black">
        <div>
          <div className="WorkspaceHead">
            <b>YOUR WORKSPACE PROFILE</b>
          </div>
          <div className="flex">
            <div className="WorkspacePhotoClass p-4">
              <div className="WorkspaceLogoDetailsContainer">
                <div
                  className="WorkspaceLogo"
                  style={{
                    backgroundImage: `url(${userData.workspaceLogoUrl})`,
                  }}
                ></div>
              </div>
            </div>
            <div className="UserWorkspaceDetails p-4">
              <div className="UserDetailRow">
                <span className="UserDetailLabel">Workspace Name:</span>
                <span className="UserDetailValue">
                  {userData.workspaceName}
                </span>
              </div>
              <div className="UserDetailRow">
                <span className="UserDetailLabel">Email:</span>
                <span className="UserDetailValue">{userData.email}</span>
              </div>
              <div className="UserDetailRow">
                <span className="UserDetailLabel">Wallet Address:</span>
                <span className="UserDetailValue mr-3">
                  {renderWalletAddress(userData.walletAddress)}
                </span>
                {workspaceCopied ? (
                  <MdOutlineCheckCircle className="CopyIcon Copied" />
                ) : (
                  <TbCopy
                    className="CopyIcon"
                    onClick={() => {
                      copyToClipboard(userData.walletAddress, -1);
                      setWorkspaceCopied(true);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <hr />
          <div className="UserTableMainClass">
            <div className="mt-6 mr-6 mb-6">
              <b>USERS DETAILS:</b>
            </div>
            <div className="UserTable mt-3 text-black">
              <div className="TableHeader">
                {/* <div className="TableHeaderCell"></div> */}
                <div className="TableHeaderCell">Name</div>
                <div className="TableHeaderCell">Email</div>
                <div className="TableHeaderCell">Wallet Address</div>
              </div>

              <div className="UserDetailsMainClassDiv">
                {userData.users.map((user, index) => (
                  <div className="TableRow" key={index}>
                    <div className="TableCell UsersNameAndLogo">
                      {/* <div className="UsersLogoClass">
                      <img
                      src={user.profileLogo}
                        className="userProfileLogoMain"
                        />
                      </div> */}
                      <div className="UsersNameClass">
                        <b>{user.name}</b>
                      </div>
                    </div>
                    <div className="TableCell">{user.email}</div>
                    <div className="TableCell">
                      <span className="mr-3">
                        {renderWalletAddress(user.walletAddress)}
                      </span>
                      {user.copied || copiedUserIndex === index ? (
                        <MdOutlineCheckCircle className="CopyIcon2 Copied2" />
                      ) : (
                        <TbCopy
                          className="CopyIcon2"
                          onClick={() => {
                            copyToClipboard(user.walletAddress, index);
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkspaceMainPage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import MainDashboard from "../components/dashboard/MainDashboard";
import { useAccount } from "wagmi";
import { ConnectKitButton } from "connectkit";
import { useNavigate } from "react-router-dom";
import UserDashboard from "../components/dashboard/UserDashboard";
import "../styles/home/Home.css";

function Home() {
  const { isConnecting, isDisconnected, address } = useAccount();
  const [isLoading, setIsLoading] = useState(true);
  // const walletAddress = "0x3013bb4E03a7B81106D69C10710EaE148C8410E1";
  const walletAddress = address;
  console.log(walletAddress);
  const [dataAddress, setDataAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (walletAddress) {
        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `https://vidapi-rose.vercel.app/readdata?address=${walletAddress}`,
          headers: {},
        };

        try {
          const response = await axios.request(config);
          const fetchedData = response.data;
          setDataAddress(fetchedData[0].address);
          console.log(dataAddress);

          if (walletAddress === fetchedData[0].address) {
            // Further work if walletAddress and dataAddress are the same
            console.log("Wallet address and data address match!");
            // Perform your desired actions here
          }
        } catch (error) {
          console.log(error);
        }

        setIsLoading(false);
      }
    };

    fetchData();
  }, [walletAddress]);

  return (
    <>
      {isDisconnected && (
        <div className="flex text-center align-center justify-center">
          <div className="connectWalletInstructionClass ">
            <div className="connectWalletIns_2 flex items-center justify-center p-5">
              <p className="text-white mr-5">Please connect your wallet</p>
              <ConnectKitButton />
            </div>
          </div>
        </div>
      )}
      {!isDisconnected && (
        <>
          {isLoading ? (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white w-96 p-4 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-4">Loading...</h2>
                <p className="mb-4">
                  Please wait while the data is being fetched.
                </p>
              </div>
            </div>
          ) : (
            <>
              {walletAddress === dataAddress ? (
                <UserDashboard />
              ) : (
                <div className="onBoardRegMainClass fixed flex items-center justify-center">
                  <div className="text-white w-96 p-4 rounded-lg shadow-lg">
                    <h2 className="text-lg font-bold mb-4">
                      You're missing out! 😔 Register now{" "}
                    </h2>
                    <p className="mb-4">
                      Don't miss out on the action - click here to register
                    </p>
                    <div className="flex justify-end">
                      <button
                        className="onBoardRegBtn px-4 py-2 rounded-md"
                        onClick={() => navigate("/user-reg")}
                      >
                        Click here to Register
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default Home;

import React from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";


const CustomButton = ({btnType,title,handleclick,styles}) => {
  return (
    <ConnectWallet
    type={btnType}
    className={`font-epilogue font-semibold text-[16px] 
    leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
    onClick={handleclick}
    />
  );
}

export default CustomButton;

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";
import { metamaskWallet } from "@thirdweb-dev/react";

import { StateContextProvider } from "./context";
import { Sepolia } from "@thirdweb-dev/chains";

import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));

const metamaskConfig = metamaskWallet();



root.render(
  <ThirdwebProvider supportedWallets={[metamaskWallet()]}>
    <Router>
      <StateContextProvider>
      <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);

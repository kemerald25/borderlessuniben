import React from "react";
import WalletIcon from "./icons/WalletIcon";

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm z-10 border-b border-slate-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <WalletIcon className="h-8 w-8 text-sky-400" />
          <h1 className="text-xl font-bold tracking-tight text-slate-200">
            DApp Connect
          </h1>
        </div>
        <div>
          {/* Web3Modal's pre-built connect button. It handles all connection, network, and account states. */}
          <div>{React.createElement("w3m-button")}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;

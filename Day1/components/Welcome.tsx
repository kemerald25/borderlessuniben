
import React from 'react';
import WalletIcon from './icons/WalletIcon';

const Welcome: React.FC = () => {
  return (
    <div className="text-center max-w-2xl">
      <div className="flex justify-center items-center mb-6">
        <WalletIcon className="h-20 w-20 text-sky-400" />
      </div>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-100 tracking-tight">
        Welcome to the Future of Web3
      </h2>
      <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto">
        Securely connect to the decentralized web. This boilerplate provides everything you need to start building your own DApp with React and WalletConnect.
      </p>
      <div className="mt-10">
        <p className="text-slate-300 font-medium">
          Click the button in the top-right corner to begin.
        </p>
      </div>
    </div>
  );
};

export default Welcome;

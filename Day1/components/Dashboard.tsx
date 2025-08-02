
import React from 'react';
import { useAccount, useEnsName, useBalance } from 'wagmi';

const TruncatedAddress: React.FC<{ address: `0x${string}` }> = ({ address }) => {
  const { data: ensName } = useEnsName({ address, chainId: 1 });

  if (ensName) {
    return <span className="font-mono text-sky-400">{ensName}</span>;
  }

  const truncated = `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  return <span className="font-mono text-sky-400">{truncated}</span>;
};


const Dashboard: React.FC = () => {
  const { address, chain } = useAccount();
  const { data: balance } = useBalance({ address });

  if (!address || !chain) {
    return null; // Should not happen if component is rendered when connected
  }

  return (
    <div className="w-full max-w-2xl bg-slate-800/50 rounded-lg border border-slate-700 shadow-lg p-6 md:p-8">
      <h2 className="text-3xl font-bold text-slate-100 mb-6">Wallet Dashboard</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center bg-slate-700/50 p-4 rounded-md">
          <span className="text-slate-400">Status</span>
          <span className="text-green-400 font-medium flex items-center">
            <span className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Connected
          </span>
        </div>
        
        <div className="flex justify-between items-center bg-slate-700/50 p-4 rounded-md overflow-hidden">
          <span className="text-slate-400 mr-4 shrink-0">Address</span>
          <TruncatedAddress address={address} />
        </div>

        <div className="flex justify-between items-center bg-slate-700/50 p-4 rounded-md">
          <span className="text-slate-400">Network</span>
          <span className="font-mono text-slate-300">{chain.name}</span>
        </div>

        <div className="flex justify-between items-center bg-slate-700/50 p-4 rounded-md">
          <span className="text-slate-400">Balance</span>
          <span className="font-mono text-slate-300">
            {balance ? `${parseFloat(balance.formatted).toFixed(4)} ${balance.symbol}` : 'Loading...'}
          </span>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-700">
          <h3 className="text-xl font-semibold text-slate-200 mb-4">DApp Features</h3>
          <p className="text-slate-400">
              Your DApp's main functionality would be presented here. You can now make authenticated calls to smart contracts on behalf of the connected user.
          </p>
          <button className="mt-4 w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 rounded-md transition-colors duration-200 disabled:bg-slate-600 disabled:cursor-not-allowed" disabled>
              Example Contract Interaction
          </button>
      </div>
    </div>
  );
};

export default Dashboard;

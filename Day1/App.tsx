import React from "react";
import { useAccount } from "wagmi";

import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";

function App() {
  const { isConnected } = useAccount();

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-sky-500 selection:text-white">
      <Header />
      <main className="container mx-auto flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 pt-24 md:pt-32">
        {isConnected ? <Dashboard /> : <Welcome />}
      </main>
      <footer className="text-center p-4 text-slate-500 text-sm absolute bottom-0 left-0 right-0">
        <p>A DApp by a world-class senior frontend React engineer.</p>
      </footer>
    </div>
  );
}

export default App;


import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { mainnet, sepolia } from 'viem/chains'

// 1. Get projectId at https://cloud.walletconnect.com
// This is a public sample ID. It's highly recommended to get your own.
const projectId = 'c02e88a0f252749cb0d9888944510b64'

// 2. Create wagmiConfig
const metadata = {
  name: 'Stellar DApp',
  description: 'A decentralized application with WalletConnect',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, sepolia] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  // ...wagmiOptions // Optional - Override createConfig parameters
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-font-family': 'Inter, sans-serif',
    '--w3m-accent': '#38bdf8',
    '--w3m-border-radius-master': '4px',
  }
})
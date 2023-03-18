import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

import { Web3Button } from '@web3modal/react'

const chains = [arbitrum, mainnet, polygon]
const projectId = 'fe62b424c4ab666f47d64744e0b3dca0'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Web3Button accentColor="blueviolet"/>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}

export  default App;
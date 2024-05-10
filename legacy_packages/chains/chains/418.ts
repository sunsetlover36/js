import type { Chain } from "../src/types";
export default {
  "chain": "LaTestnet",
  "chainId": 418,
  "explorers": [
    {
      "name": "LaTestnet Explorer",
      "url": "https://testexplorer.lachain.network",
      "standard": "EIP3091"
    }
  ],
  "faucets": [
    "https://faucet.lachain.network"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "name": "LaTestnet",
  "nativeCurrency": {
    "name": "Test LaCoin",
    "symbol": "TLA",
    "decimals": 18
  },
  "networkId": 418,
  "rpc": [
    "https://418.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.testnet.lachain.network",
    "https://lachain-testnet.rpc-nodes.cedalio.dev"
  ],
  "shortName": "latestnet",
  "slug": "latestnet",
  "testnet": true
} as const satisfies Chain;
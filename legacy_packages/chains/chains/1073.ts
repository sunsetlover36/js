import type { Chain } from "../src/types";
export default {
  "chain": "ShimmerEVM",
  "chainId": 1073,
  "explorers": [
    {
      "name": "explorer",
      "url": "https://explorer.evm.testnet.shimmer.network",
      "standard": "EIP3091"
    }
  ],
  "faucets": [
    "https://evm-toolkit.evm.testnet.shimmer.network",
    "https://evm-faucet.testnet.shimmer.network"
  ],
  "infoURL": "https://shimmer.network",
  "name": "ShimmerEVM Testnet",
  "nativeCurrency": {
    "name": "SMR",
    "symbol": "SMR",
    "decimals": 18
  },
  "networkId": 1073,
  "rpc": [
    "https://1073.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://json-rpc.evm.testnet.shimmer.network"
  ],
  "shortName": "shimmerevm-testnet",
  "slip44": 1,
  "slug": "shimmerevm-testnet",
  "testnet": true,
  "title": "ShimmerEVM Testnet"
} as const satisfies Chain;
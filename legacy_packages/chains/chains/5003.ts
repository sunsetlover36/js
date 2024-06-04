import type { Chain } from "../src/types";
export default {
  "chain": "ETH",
  "chainId": 5003,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://explorer.sepolia.mantle.xyz",
      "standard": "EIP3091"
    }
  ],
  "faucets": [
    "https://faucet.sepolia.mantle.xyz"
  ],
  "features": [],
  "infoURL": "https://mantle.xyz",
  "name": "Mantle Sepolia Testnet",
  "nativeCurrency": {
    "name": "Sepolia Mantle",
    "symbol": "MNT",
    "decimals": 18
  },
  "networkId": 5003,
  "redFlags": [],
  "rpc": [
    "https://5003.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.sepolia.mantle.xyz"
  ],
  "shortName": "mnt-sep",
  "slip44": 1,
  "slug": "mantle-sepolia-testnet",
  "testnet": true
} as const satisfies Chain;
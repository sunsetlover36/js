import type { Chain } from "../src/types";
export default {
  "chain": "AA",
  "chainId": 10242,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://explorer.arthera.net",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "infoURL": "https://docs.arthera.net/build/developing-sc/using-hardhat",
  "name": "Arthera Mainnet",
  "nativeCurrency": {
    "name": "Arthera",
    "symbol": "AA",
    "decimals": 18
  },
  "networkId": 10242,
  "rpc": [
    "https://10242.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.arthera.net"
  ],
  "shortName": "aa",
  "slip44": 10242,
  "slug": "arthera",
  "testnet": false
} as const satisfies Chain;
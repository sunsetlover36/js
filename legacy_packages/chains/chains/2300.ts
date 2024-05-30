import type { Chain } from "../src/types";
export default {
  "chain": "BOMB",
  "chainId": 2300,
  "explorers": [
    {
      "name": "bombscan",
      "url": "https://bombscan.com",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "infoURL": "https://www.bombchain.com",
  "name": "BOMB Chain",
  "nativeCurrency": {
    "name": "BOMB Token",
    "symbol": "BOMB",
    "decimals": 18
  },
  "networkId": 2300,
  "rpc": [
    "https://2300.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.bombchain.com"
  ],
  "shortName": "bomb",
  "slug": "bomb-chain",
  "testnet": false
} as const satisfies Chain;
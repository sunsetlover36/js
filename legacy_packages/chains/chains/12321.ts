import type { Chain } from "../src/types";
export default {
  "chain": "BLG",
  "chainId": 12321,
  "explorers": [],
  "faucets": [
    "https://faucet.blgchain.com"
  ],
  "infoURL": "https://blgchain.com",
  "name": "BLG Testnet",
  "nativeCurrency": {
    "name": "Blg",
    "symbol": "BLG",
    "decimals": 18
  },
  "networkId": 12321,
  "rpc": [
    "https://12321.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.blgchain.com"
  ],
  "shortName": "blgchain",
  "slip44": 1,
  "slug": "blg-testnet",
  "testnet": true
} as const satisfies Chain;
import type { Chain } from "../src/types";
export default {
  "chain": "Electroneum",
  "chainId": 52014,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://blockexplorer.electroneum.com",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://electroneum.com",
  "name": "Electroneum Mainnet",
  "nativeCurrency": {
    "name": "Electroneum",
    "symbol": "ETN",
    "decimals": 18
  },
  "networkId": 52014,
  "rpc": [
    "https://52014.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.electroneum.com"
  ],
  "shortName": "etn-mainnet",
  "slug": "electroneum",
  "testnet": false
} as const satisfies Chain;
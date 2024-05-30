import type { Chain } from "../src/types";
export default {
  "chain": "VANAR",
  "chainId": 2040,
  "explorers": [
    {
      "name": "Vanar Explorer",
      "url": "https://explorer.vanarchain.com",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://vanarchain.com",
  "name": "Vanar Mainnet",
  "nativeCurrency": {
    "name": "VANRY",
    "symbol": "VANRY",
    "decimals": 18
  },
  "networkId": 2040,
  "rpc": [
    "https://2040.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.vanarchain.com",
    "wss://ws.vanarchain.com"
  ],
  "shortName": "Vanar",
  "slug": "vanar",
  "testnet": false,
  "title": "Vanarchain"
} as const satisfies Chain;
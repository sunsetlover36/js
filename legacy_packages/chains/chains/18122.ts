import type { Chain } from "../src/types";
export default {
  "chain": "Smart Trade Networks",
  "chainId": 18122,
  "explorers": [
    {
      "name": "stnscan",
      "url": "https://stnscan.com",
      "standard": "none"
    }
  ],
  "faucets": [],
  "infoURL": "https://www.smarttradenetworks.com",
  "name": "Smart Trade Networks",
  "nativeCurrency": {
    "name": "STN",
    "symbol": "STN",
    "decimals": 18
  },
  "networkId": 18122,
  "rpc": [
    "https://18122.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://beefledgerwallet.com:8544"
  ],
  "shortName": "STN",
  "slug": "smart-trade-networks",
  "testnet": false
} as const satisfies Chain;
import type { Chain } from "../src/types";
export default {
  "chain": "Berachain",
  "chainId": 80085,
  "explorers": [
    {
      "name": "Beratrail",
      "url": "https://artio.beratrail.io",
      "standard": "none"
    }
  ],
  "faucets": [
    "https://artio.faucet.berachain.com"
  ],
  "features": [],
  "infoURL": "https://www.berachain.com/",
  "name": "Berachain Artio",
  "nativeCurrency": {
    "name": "BERA",
    "symbol": "BERA",
    "decimals": 18
  },
  "networkId": 80085,
  "redFlags": [],
  "rpc": [
    "https://80085.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://quicknode-rpc.berachain.com",
    "https://artio.rpc.berachain.com",
    "https://rpc.ankr.com/berachain_testnet"
  ],
  "shortName": "bera-artio",
  "slug": "berachain-artio",
  "testnet": true
} as const satisfies Chain;
import type { Chain } from "../src/types";
export default {
  "chain": "SOMA",
  "chainId": 2332,
  "explorers": [
    {
      "name": "SOMA Explorer Mainnet",
      "url": "https://somascan.io",
      "standard": "none"
    }
  ],
  "faucets": [
    "https://airdrop.somanetwork.io"
  ],
  "infoURL": "https://somanetwork.io",
  "name": "SOMA Network Mainnet",
  "nativeCurrency": {
    "name": "Soma Native Token",
    "symbol": "SMA",
    "decimals": 18
  },
  "networkId": 2332,
  "rpc": [
    "https://2332.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://data-mainnet-v1.somanetwork.io/",
    "https://id-mainnet.somanetwork.io",
    "https://hk-mainnet.somanetwork.io",
    "https://sg-mainnet.somanetwork.io"
  ],
  "shortName": "smam",
  "slug": "soma-network",
  "status": "incubating",
  "testnet": false
} as const satisfies Chain;
import type { Chain } from "../src/types";
export default {
  "chain": "BPX",
  "chainId": 279,
  "explorers": [],
  "faucets": [],
  "infoURL": "https://bpxchain.cc",
  "name": "BPX Blockchain",
  "nativeCurrency": {
    "name": "BPX",
    "symbol": "BPX",
    "decimals": 18
  },
  "networkId": 279,
  "rpc": [
    "https://279.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.mainnet.bpxchain.cc",
    "https://bpx-dataseed.infinex.cc"
  ],
  "shortName": "bpx",
  "slug": "bpx-blockchain",
  "testnet": false
} as const satisfies Chain;
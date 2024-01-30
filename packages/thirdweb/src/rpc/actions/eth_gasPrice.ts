import { hexToBigInt, type EIP1193RequestFn, type EIP1474Methods } from "viem";

/**
 * Retrieves the current gas price from the Ethereum network.
 * @param request - The EIP1193 request function.
 * @returns A promise that resolves to the gas price as a bigint.
 * @example
 * ```ts
 * import { getRpcClient, eth_gasPrice } from "thirdweb/rpc";
 * const rpcRequest = getRpcClient({ client, chainId });
 * const gasPrice = await eth_gasPrice(rpcRequest);
 * ```
 */
export async function eth_gasPrice(
  request: EIP1193RequestFn<EIP1474Methods>,
): Promise<bigint> {
  const result = await request({
    method: "eth_gasPrice",
  });
  return hexToBigInt(result);
}

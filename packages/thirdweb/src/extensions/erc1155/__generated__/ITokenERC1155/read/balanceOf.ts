import { readContract } from "../../../../../transaction/read-contract.js";
import type { BaseTransactionOptions } from "../../../../../transaction/types.js";
import type { AbiParameterToPrimitiveType } from "abitype";

/**
 * Represents the parameters for the "balanceOf" function.
 */
export type BalanceOfParams = {
  account: AbiParameterToPrimitiveType<{ type: "address"; name: "account" }>;
  id: AbiParameterToPrimitiveType<{ type: "uint256"; name: "id" }>;
};

/**
 * Calls the "balanceOf" function on the contract.
 * @param options - The options for the balanceOf function.
 * @returns The parsed result of the function call.
 * @extension ERC1155
 * @example
 * ```
 * import { balanceOf } from "thirdweb/extensions/erc1155";
 *
 * const result = await balanceOf({
 *  account: ...,
 *  id: ...,
 * });
 *
 * ```
 */
export async function balanceOf(
  options: BaseTransactionOptions<BalanceOfParams>,
) {
  return readContract({
    contract: options.contract,
    method: [
      "0x00fdd58e",
      [
        {
          type: "address",
          name: "account",
        },
        {
          type: "uint256",
          name: "id",
        },
      ],
      [
        {
          type: "uint256",
        },
      ],
    ],
    params: [options.account, options.id],
  });
}
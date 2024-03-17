import type { BaseTransactionOptions } from "../../../../../transaction/types.js";
import { prepareContractCall } from "../../../../../transaction/prepare-contract-call.js";
import type { AbiParameterToPrimitiveType } from "abitype";

/**
 * Represents the parameters for the "setTokenURI" function.
 */
export type SetTokenURIParams = {
  tokenId: AbiParameterToPrimitiveType<{ type: "uint256"; name: "_tokenId" }>;
  uri: AbiParameterToPrimitiveType<{ type: "string"; name: "_uri" }>;
};

/**
 * Calls the "setTokenURI" function on the contract.
 * @param options - The options for the "setTokenURI" function.
 * @returns A prepared transaction object.
 * @extension ERC721
 * @example
 * ```
 * import { setTokenURI } from "thirdweb/extensions/erc721";
 *
 * const transaction = setTokenURI({
 *  tokenId: ...,
 *  uri: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function setTokenURI(
  options: BaseTransactionOptions<SetTokenURIParams>,
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      "0x162094c4",
      [
        {
          type: "uint256",
          name: "_tokenId",
        },
        {
          type: "string",
          name: "_uri",
        },
      ],
      [],
    ],
    params: [options.tokenId, options.uri],
  });
}
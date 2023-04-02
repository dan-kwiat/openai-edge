/**
 *
 * @export
 * @interface CreateEmbeddingRequest
 */
export interface CreateEmbeddingRequest {
    /**
     * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
     * @type {string}
     * @memberof CreateEmbeddingRequest
     */
    'model': string;
    /**
     *
     * @type {CreateEmbeddingRequestInput}
     * @memberof CreateEmbeddingRequest
     */
    'input': CreateEmbeddingRequestInput;
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
     * @type {string}
     * @memberof CreateEmbeddingRequest
     */
    'user'?: string;
}
/**
 * @type CreateEmbeddingRequestInput
 * Input text to get embeddings for, encoded as a string or array of tokens. To get embeddings for multiple inputs in a single request, pass an array of strings or array of token arrays. Each input must not exceed 8192 tokens in length.
 * @export
 */
export declare type CreateEmbeddingRequestInput = Array<any> | Array<number> | Array<string> | string;
/**
 *
 * @export
 * @interface CreateEmbeddingResponse
 */
export interface CreateEmbeddingResponse {
    /**
     *
     * @type {string}
     * @memberof CreateEmbeddingResponse
     */
    'object': string;
    /**
     *
     * @type {string}
     * @memberof CreateEmbeddingResponse
     */
    'model': string;
    /**
     *
     * @type {Array<CreateEmbeddingResponseDataInner>}
     * @memberof CreateEmbeddingResponse
     */
    'data': Array<CreateEmbeddingResponseDataInner>;
    /**
     *
     * @type {CreateEmbeddingResponseUsage}
     * @memberof CreateEmbeddingResponse
     */
    'usage': CreateEmbeddingResponseUsage;
}
/**
 *
 * @export
 * @interface CreateEmbeddingResponseDataInner
 */
export interface CreateEmbeddingResponseDataInner {
    /**
     *
     * @type {number}
     * @memberof CreateEmbeddingResponseDataInner
     */
    'index': number;
    /**
     *
     * @type {string}
     * @memberof CreateEmbeddingResponseDataInner
     */
    'object': string;
    /**
     *
     * @type {Array<number>}
     * @memberof CreateEmbeddingResponseDataInner
     */
    'embedding': Array<number>;
}
/**
 *
 * @export
 * @interface CreateEmbeddingResponseUsage
 */
export interface CreateEmbeddingResponseUsage {
    /**
     *
     * @type {number}
     * @memberof CreateEmbeddingResponseUsage
     */
    'prompt_tokens': number;
    /**
     *
     * @type {number}
     * @memberof CreateEmbeddingResponseUsage
     */
    'total_tokens': number;
}
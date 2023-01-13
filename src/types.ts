import { AxiosRequestConfig, AxiosResponse } from "./axios"

export interface ConfigurationParameters {
  apiKey?:
    | string
    | Promise<string>
    | ((name: string) => string)
    | ((name: string) => Promise<string>)
  organization?: string
  username?: string
  password?: string
  accessToken?:
    | string
    | Promise<string>
    | ((name?: string, scopes?: string[]) => string)
    | ((name?: string, scopes?: string[]) => Promise<string>)
  basePath?: string
  baseOptions?: any
  formDataCtor?: new () => any
}

export declare class Configuration {
  /**
   * parameter for apiKey security
   * @param name security name
   * @memberof Configuration
   */
  apiKey?:
    | string
    | Promise<string>
    | ((name: string) => string)
    | ((name: string) => Promise<string>)
  /**
   * OpenAI organization id
   *
   * @type {string}
   * @memberof Configuration
   */
  organization?: string
  /**
   * parameter for basic security
   *
   * @type {string}
   * @memberof Configuration
   */
  username?: string
  /**
   * parameter for basic security
   *
   * @type {string}
   * @memberof Configuration
   */
  password?: string
  /**
   * parameter for oauth2 security
   * @param name security name
   * @param scopes oauth2 scope
   * @memberof Configuration
   */
  accessToken?:
    | string
    | Promise<string>
    | ((name?: string, scopes?: string[]) => string)
    | ((name?: string, scopes?: string[]) => Promise<string>)
  /**
   * override base path
   *
   * @type {string}
   * @memberof Configuration
   */
  basePath?: string
  /**
   * base options for axios calls
   *
   * @type {any}
   * @memberof Configuration
   */
  baseOptions?: any
  /**
   * The FormData constructor that will be used to create multipart form data
   * requests. You can inject this here so that execution environments that
   * do not support the FormData class can still run the generated client.
   *
   * @type {new () => FormData}
   */
  formDataCtor?: new () => any
  constructor(param?: ConfigurationParameters)
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(mime: string): boolean
}

export declare class BaseAPI {
  protected basePath: string
  protected configuration?: Configuration
  constructor(configuration?: Configuration, basePath?: string)
}

/**
 * @type CreateCompletionRequestStop
 * Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.
 * @export
 */
export declare type CreateCompletionRequestStop = Array<string> | string

/**
 * @type CreateCompletionRequestPrompt
 * The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.  Note that <|endoftext|> is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document.
 * @export
 */
export declare type CreateCompletionRequestPrompt =
  | Array<any>
  | Array<number>
  | Array<string>
  | string

/**
 *
 * @export
 * @interface CreateCompletionRequest
 */
export interface CreateCompletionRequest {
  /**
   * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
   * @type {string}
   * @memberof CreateCompletionRequest
   */
  model: string
  /**
   *
   * @type {CreateCompletionRequestPrompt}
   * @memberof CreateCompletionRequest
   */
  prompt?: CreateCompletionRequestPrompt | null
  /**
   * The suffix that comes after a completion of inserted text.
   * @type {string}
   * @memberof CreateCompletionRequest
   */
  suffix?: string | null
  /**
   * The maximum number of [tokens](/tokenizer) to generate in the completion.  The token count of your prompt plus `max_tokens` cannot exceed the model\'s context length. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
   * @type {number}
   * @memberof CreateCompletionRequest
   */
  max_tokens?: number | null
  /**
   * What [sampling temperature](https://towardsdatascience.com/how-to-sample-from-language-models-682bceb97277) to use. Higher values means the model will take more risks. Try 0.9 for more creative applications, and 0 (argmax sampling) for ones with a well-defined answer.  We generally recommend altering this or `top_p` but not both.
   * @type {number}
   * @memberof CreateCompletionRequest
   */
  temperature?: number | null
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or `temperature` but not both.
   * @type {number}
   * @memberof CreateCompletionRequest
   */
  top_p?: number | null
  /**
   * How many completions to generate for each prompt.  **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
   * @type {number}
   * @memberof CreateCompletionRequest
   */
  n?: number | null
  /**
   * Whether to stream back partial progress. If set, tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message.
   * @type {boolean}
   * @memberof CreateCompletionRequest
   */
  stream?: boolean | null
  /**
   * Include the log probabilities on the `logprobs` most likely tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response.  The maximum value for `logprobs` is 5. If you need more than this, please contact us through our [Help center](https://help.openai.com) and describe your use case.
   * @type {number}
   * @memberof CreateCompletionRequest
   */
  logprobs?: number | null
  /**
   * Echo back the prompt in addition to the completion
   * @type {boolean}
   * @memberof CreateCompletionRequest
   */
  echo?: boolean | null
  /**
   *
   * @type {CreateCompletionRequestStop}
   * @memberof CreateCompletionRequest
   */
  stop?: CreateCompletionRequestStop | null
  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model\'s likelihood to talk about new topics.  [See more information about frequency and presence penalties.](/docs/api-reference/parameter-details)
   * @type {number}
   * @memberof CreateCompletionRequest
   */
  presence_penalty?: number | null
  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model\'s likelihood to repeat the same line verbatim.  [See more information about frequency and presence penalties.](/docs/api-reference/parameter-details)
   * @type {number}
   * @memberof CreateCompletionRequest
   */
  frequency_penalty?: number | null
  /**
   * Generates `best_of` completions server-side and returns the \"best\" (the one with the highest log probability per token). Results cannot be streamed.  When used with `n`, `best_of` controls the number of candidate completions and `n` specifies how many to return – `best_of` must be greater than `n`.  **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
   * @type {number}
   * @memberof CreateCompletionRequest
   */
  best_of?: number | null
  /**
   * Modify the likelihood of specified tokens appearing in the completion.  Accepts a json object that maps tokens (specified by their token ID in the GPT tokenizer) to an associated bias value from -100 to 100. You can use this [tokenizer tool](/tokenizer?view=bpe) (which works for both GPT-2 and GPT-3) to convert text to token IDs. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.  As an example, you can pass `{\"50256\": -100}` to prevent the <|endoftext|> token from being generated.
   * @type {object}
   * @memberof CreateCompletionRequest
   */
  logit_bias?: object | null
  /**
   * A unique identifier representing your end-user, which will help OpenAI to monitor and detect abuse. [Learn more](/docs/usage-policies/end-user-ids).
   * @type {string}
   * @memberof CreateCompletionRequest
   */
  user?: string
}

/**
 *
 * @export
 * @interface CreateCompletionResponseChoicesInnerLogprobs
 */
export interface CreateCompletionResponseChoicesInnerLogprobs {
  /**
   *
   * @type {Array<string>}
   * @memberof CreateCompletionResponseChoicesInnerLogprobs
   */
  tokens?: Array<string>
  /**
   *
   * @type {Array<number>}
   * @memberof CreateCompletionResponseChoicesInnerLogprobs
   */
  token_logprobs?: Array<number>
  /**
   *
   * @type {Array<object>}
   * @memberof CreateCompletionResponseChoicesInnerLogprobs
   */
  top_logprobs?: Array<object>
  /**
   *
   * @type {Array<number>}
   * @memberof CreateCompletionResponseChoicesInnerLogprobs
   */
  text_offset?: Array<number>
}

/**
 *
 * @export
 * @interface CreateCompletionResponseChoicesInner
 */
export interface CreateCompletionResponseChoicesInner {
  /**
   *
   * @type {string}
   * @memberof CreateCompletionResponseChoicesInner
   */
  text?: string
  /**
   *
   * @type {number}
   * @memberof CreateCompletionResponseChoicesInner
   */
  index?: number
  /**
   *
   * @type {CreateCompletionResponseChoicesInnerLogprobs}
   * @memberof CreateCompletionResponseChoicesInner
   */
  logprobs?: CreateCompletionResponseChoicesInnerLogprobs | null
  /**
   *
   * @type {string}
   * @memberof CreateCompletionResponseChoicesInner
   */
  finish_reason?: string
}

/**
 *
 * @export
 * @interface CreateCompletionResponseUsage
 */
export interface CreateCompletionResponseUsage {
  /**
   *
   * @type {number}
   * @memberof CreateCompletionResponseUsage
   */
  prompt_tokens: number
  /**
   *
   * @type {number}
   * @memberof CreateCompletionResponseUsage
   */
  completion_tokens: number
  /**
   *
   * @type {number}
   * @memberof CreateCompletionResponseUsage
   */
  total_tokens: number
}

/**
 *
 * @export
 * @interface CreateCompletionResponse
 */
export interface CreateCompletionResponse {
  /**
   *
   * @type {string}
   * @memberof CreateCompletionResponse
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof CreateCompletionResponse
   */
  object: string
  /**
   *
   * @type {number}
   * @memberof CreateCompletionResponse
   */
  created: number
  /**
   *
   * @type {string}
   * @memberof CreateCompletionResponse
   */
  model: string
  /**
   *
   * @type {Array<CreateCompletionResponseChoicesInner>}
   * @memberof CreateCompletionResponse
   */
  choices: Array<CreateCompletionResponseChoicesInner>
  /**
   *
   * @type {CreateCompletionResponseUsage}
   * @memberof CreateCompletionResponse
   */
  usage?: CreateCompletionResponseUsage
}

/**
 * OpenAIApi - object-oriented interface
 * @export
 * @class OpenAIApi
 * @extends {BaseAPI}
 */
export declare class OpenAIApi extends BaseAPI {
  /**
   *
   * @summary Creates a completion for the provided prompt and parameters
   * @param {CreateCompletionRequest} createCompletionRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OpenAIApi
   */
  createCompletion(
    createCompletionRequest: CreateCompletionRequest,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<CreateCompletionResponse, any>>
  // /**
  //  *
  //  * @summary Creates an image given a prompt.
  //  * @param {CreateImageRequest} createImageRequest
  //  * @param {*} [options] Override http request option.
  //  * @throws {RequiredError}
  //  * @memberof OpenAIApi
  //  */
  // createImage(
  //   createImageRequest: CreateImageRequest,
  //   options?: AxiosRequestConfig
  // ): Promise<import("axios").AxiosResponse<ImagesResponse, any>>
}

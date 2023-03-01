/**
 *
 * @export
 * @interface ChatCompletionResponseMessage
 */
export interface ChatCompletionResponseMessage {
  /**
   * The role of the author of this message.
   * @type {string}
   * @memberof ChatCompletionResponseMessage
   */
  role: ChatCompletionResponseMessageRoleEnum
  /**
   * The contents of the message
   * @type {string}
   * @memberof ChatCompletionResponseMessage
   */
  content: string
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

export const ChatCompletionResponseMessageRoleEnum = {
  System: "system",
  User: "user",
  Assistant: "assistant",
} as const

export type ChatCompletionResponseMessageRoleEnum =
  typeof ChatCompletionResponseMessageRoleEnum[keyof typeof ChatCompletionResponseMessageRoleEnum]

export const ChatCompletionRequestMessageRoleEnum = {
  System: "system",
  User: "user",
  Assistant: "assistant",
} as const

export type ChatCompletionRequestMessageRoleEnum =
  typeof ChatCompletionRequestMessageRoleEnum[keyof typeof ChatCompletionRequestMessageRoleEnum]

/**
 *
 * @export
 * @interface ChatCompletionRequestMessage
 */
export interface ChatCompletionRequestMessage {
  /**
   * The role of the author of this message.
   * @type {string}
   * @memberof ChatCompletionRequestMessage
   */
  role: ChatCompletionRequestMessageRoleEnum
  /**
   * The contents of the message
   * @type {string}
   * @memberof ChatCompletionRequestMessage
   */
  content: string
  /**
   * The name of the user in a multi-user chat
   * @type {string}
   * @memberof ChatCompletionRequestMessage
   */
  name?: string
}

/**
 *
 * @export
 * @interface CreateChatCompletionRequest
 */
export interface CreateChatCompletionRequest {
  /**
   * ID of the model to use. Currently, only `gpt-3.5-turbo` and `gpt-3.5-turbo-0301` are supported.
   * @type {string}
   * @memberof CreateChatCompletionRequest
   */
  model: string
  /**
   * The messages to generate chat completions for, in the [chat format](/docs/guides/chat/introduction).
   * @type {Array<ChatCompletionRequestMessage>}
   * @memberof CreateChatCompletionRequest
   */
  messages: Array<ChatCompletionRequestMessage>
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.  We generally recommend altering this or `top_p` but not both.
   * @type {number}
   * @memberof CreateChatCompletionRequest
   */
  temperature?: number | null
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or `temperature` but not both.
   * @type {number}
   * @memberof CreateChatCompletionRequest
   */
  top_p?: number | null
  /**
   * How many chat completion choices to generate for each input message.
   * @type {number}
   * @memberof CreateChatCompletionRequest
   */
  n?: number | null
  /**
   * If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message.
   * @type {boolean}
   * @memberof CreateChatCompletionRequest
   */
  stream?: boolean | null
  /**
   *
   * @type {CreateChatCompletionRequestStop}
   * @memberof CreateChatCompletionRequest
   */
  stop?: CreateChatCompletionRequestStop
  /**
   * The maximum number of tokens allowed for the generated answer. By default, the number of tokens the model can return will be (4096 - prompt tokens).
   * @type {number}
   * @memberof CreateChatCompletionRequest
   */
  max_tokens?: number
  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model\'s likelihood to talk about new topics.  [See more information about frequency and presence penalties.](/docs/api-reference/parameter-details)
   * @type {number}
   * @memberof CreateChatCompletionRequest
   */
  presence_penalty?: number | null
  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model\'s likelihood to repeat the same line verbatim.  [See more information about frequency and presence penalties.](/docs/api-reference/parameter-details)
   * @type {number}
   * @memberof CreateChatCompletionRequest
   */
  frequency_penalty?: number | null
  /**
   * Modify the likelihood of specified tokens appearing in the completion.  Accepts a json object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.
   * @type {object}
   * @memberof CreateChatCompletionRequest
   */
  logit_bias?: object | null
  /**
   * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
   * @type {string}
   * @memberof CreateChatCompletionRequest
   */
  user?: string
}
/**
 * @type CreateChatCompletionRequestStop
 * Up to 4 sequences where the API will stop generating further tokens.
 * @export
 */
export type CreateChatCompletionRequestStop = Array<string> | string

/**
 *
 * @export
 * @interface CreateChatCompletionResponse
 */
export interface CreateChatCompletionResponse {
  /**
   *
   * @type {string}
   * @memberof CreateChatCompletionResponse
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof CreateChatCompletionResponse
   */
  object: string
  /**
   *
   * @type {number}
   * @memberof CreateChatCompletionResponse
   */
  created: number
  /**
   *
   * @type {string}
   * @memberof CreateChatCompletionResponse
   */
  model: string
  /**
   *
   * @type {Array<CreateChatCompletionResponseChoicesInner>}
   * @memberof CreateChatCompletionResponse
   */
  choices: Array<CreateChatCompletionResponseChoicesInner>
  /**
   *
   * @type {CreateCompletionResponseUsage}
   * @memberof CreateChatCompletionResponse
   */
  usage?: CreateCompletionResponseUsage
}
/**
 *
 * @export
 * @interface CreateChatCompletionResponseChoicesInner
 */
export interface CreateChatCompletionResponseChoicesInner {
  /**
   *
   * @type {number}
   * @memberof CreateChatCompletionResponseChoicesInner
   */
  index?: number
  /**
   *
   * @type {ChatCompletionResponseMessage}
   * @memberof CreateChatCompletionResponseChoicesInner
   */
  message?: ChatCompletionResponseMessage
  /**
   *
   * @type {string}
   * @memberof CreateChatCompletionResponseChoicesInner
   */
  finish_reason?: string
}

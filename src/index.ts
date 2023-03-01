import { ConfigurationParameters } from "./types/config"
import { CreateCompletionRequest } from "./types/completion"
import { CreateImageRequest } from "./types/image"
import { CreateChatCompletionRequest } from "./types/chat"

const BASE_PATH = "https://api.openai.com/v1".replace(/\/+$/, "")

export class Configuration {
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
  // asdlfkalsdfkmad
  constructor(param: ConfigurationParameters = {}) {
    this.apiKey = param.apiKey
    this.organization = param.organization
    this.username = param.username
    this.password = param.password
    this.accessToken = param.accessToken
    this.basePath = param.basePath
    this.baseOptions = param.baseOptions
    this.formDataCtor = param.formDataCtor
    if (!this.baseOptions) {
      this.baseOptions = {}
    }
    this.baseOptions.headers = Object.assign(
      {
        // "User-Agent": `OpenAI/NodeJS/${packageJson.version}`,
        Authorization: `Bearer ${this.apiKey}`,
      },
      this.baseOptions.headers
    )
    if (this.organization) {
      this.baseOptions.headers["OpenAI-Organization"] = this.organization
    }
    // if (!this.formDataCtor) {
    //   this.formDataCtor = require("form-data")
    // }
  }
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
  isJsonMime(mime: string) {
    const jsonMime = new RegExp(
      "^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$",
      "i"
    )
    return (
      mime !== null &&
      (jsonMime.test(mime) ||
        mime.toLowerCase() === "application/json-patch+json")
    )
  }
}

/**
 *
 * @export
 * @class BaseAPI
 */
class BaseAPI {
  basePath: string
  configuration?: Configuration

  constructor(configuration?: Configuration, basePath: string = BASE_PATH) {
    this.basePath = basePath
    // this.axios = axios;
    if (configuration) {
      this.configuration = configuration
      this.basePath = configuration.basePath || this.basePath
    }
  }
}

/**
 * OpenAIApi - object-oriented interface
 * @export
 * @class OpenAIApi
 * @extends {BaseAPI}
 */
export class OpenAIApi extends BaseAPI {
  /**
   *
   * @summary Creates a completion for the chat message
   * @param {CreateChatCompletionRequest} createChatCompletionRequest
   * @throws {RequiredError}
   * @memberof OpenAIApi
   */

  //  * @param {*} [options] Override http request option.

  public createChatCompletion(
    createChatCompletionRequest: CreateChatCompletionRequest
    // options?: AxiosRequestConfig
  ) {
    if (!this.configuration) {
      throw new Error(`Must provide a valid configuration to \`OpenAIApi\``)
    }
    return fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        ...this.configuration.baseOptions.headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createChatCompletionRequest),
    })
  }

  /**
   *
   * @summary Classifies the specified `query` using provided examples.  The endpoint first [searches](/docs/api-reference/searches) over the labeled examples to select the ones most relevant for the particular query. Then, the relevant examples are combined with the query to construct a prompt to produce the final label via the [completions](/docs/api-reference/completions) endpoint.  Labeled examples can be provided via an uploaded `file`, or explicitly listed in the request using the `examples` parameter for quick tests and small scale use cases.
   * @param {CreateClassificationRequest} createClassificationRequest
   * @deprecated
   * @throws {RequiredError}
   * @memberof OpenAIApi
   */

  //  * @param {*} [options] Override http request option.

  /**
   *
   * @summary Creates a completion for the provided prompt and parameters
   * @param {CreateCompletionRequest} createCompletionRequest
   * @throws {RequiredError}
   * @memberof OpenAIApi
   */
  public createCompletion(
    createCompletionRequest: CreateCompletionRequest
    // options?: AxiosRequestConfig
  ) {
    if (!this.configuration) {
      throw new Error(`Must provide a valid configuration to \`OpenAIApi\``)
    }
    return fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        ...this.configuration.baseOptions.headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createCompletionRequest),
    })
  }
  /**
   *
   * @summary Creates an image given a prompt.
   * @param {CreateImageRequest} createImageRequest
   * @throws {RequiredError}
   * @memberof OpenAIApi
   */
  public createImage(
    createImageRequest: CreateImageRequest
    // options?: AxiosRequestConfig
  ) {
    if (!this.configuration) {
      throw new Error(`Must provide a valid configuration to \`OpenAIApi\``)
    }
    return fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        ...this.configuration.baseOptions.headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createImageRequest),
    })
  }
}

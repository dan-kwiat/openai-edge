import { ConfigurationParameters, CreateCompletionRequest } from "./types"

const BASE_PATH = "https://api.openai.com/v1".replace(/\/+$/, "")

// export function sum(...nums: number[]): number {
//   let i = 0,
//     total = 0
//   for (; i < nums.length; i++) total += nums[i]
//   return total
// }

// export function substract(...nums: number[]): number {
//   let i = 0,
//     total = nums[i++] | 0
//   for (; i < nums.length; i++) total -= nums[i]
//   return total
// }

// export function average(...nums: number[]): number {
//   let i = 0,
//     len = nums.length,
//     total = 0
//   for (; i < len; i++) total += nums[i]
//   return total / len
// }

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
   * @summary Creates a completion for the provided prompt and parameters
   * @param {CreateCompletionRequest} createCompletionRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OpenAIApi
   */
  async createCompletion(
    createCompletionRequest: CreateCompletionRequest
    // options?: AxiosRequestConfig
  ) {
    // return exports
    //   .OpenAIApiFp(this.configuration)
    //   .createCompletion(createCompletionRequest, options)
    //   .then((request) => request(this.axios, this.basePath))
    // let API_KEY: string
    // try {
    //   if (!this.configuration || !this.configuration.apiKey) {
    //     throw new Error("No API key provided")
    //   }
    //   if (typeof this.configuration.apiKey === "function") {
    //     API_KEY = await this.configuration.apiKey("name") // not sure what param should be passed here
    //   } else {
    //     API_KEY = await this.configuration.apiKey
    //   }
    //   if (!API_KEY) {
    //     throw new Error("No API key provided")
    //   }
    // } catch (err: any) {
    //   throw new Error(`Must provide a valid API key`)
    // }

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
  // /**
  //  *
  //  * @summary Creates an image given a prompt.
  //  * @param {CreateImageRequest} createImageRequest
  //  * @param {*} [options] Override http request option.
  //  * @throws {RequiredError}
  //  * @memberof OpenAIApi
  //  */
  // createImage(createImageRequest, options) {
  //     return exports.OpenAIApiFp(this.configuration).createImage(createImageRequest, options).then((request) => request(this.axios, this.basePath));
  // }
}

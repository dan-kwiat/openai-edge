/**
 *
 * @export
 * @interface CreateImageRequest
 */
export interface CreateImageRequest {
  /**
   * A text description of the desired image(s). The maximum length is 1000 characters.
   * @type {string}
   * @memberof CreateImageRequest
   */
  prompt: string
  /**
   * The number of images to generate. Must be between 1 and 10.
   * @type {number}
   * @memberof CreateImageRequest
   */
  n?: number | null
  /**
   * The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`.
   * @type {string}
   * @memberof CreateImageRequest
   */
  size?: CreateImageRequestSizeEnum
  /**
   * The format in which the generated images are returned. Must be one of `url` or `b64_json`.
   * @type {string}
   * @memberof CreateImageRequest
   */
  response_format?: CreateImageRequestResponseFormatEnum
  /**
   * A unique identifier representing your end-user, which will help OpenAI to monitor and detect abuse. [Learn more](/docs/usage-policies/end-user-ids).
   * @type {string}
   * @memberof CreateImageRequest
   */
  user?: string
}
export declare const CreateImageRequestSizeEnum: {
  readonly _256x256: "256x256"
  readonly _512x512: "512x512"
  readonly _1024x1024: "1024x1024"
}
export declare type CreateImageRequestSizeEnum =
  typeof CreateImageRequestSizeEnum[keyof typeof CreateImageRequestSizeEnum]
export declare const CreateImageRequestResponseFormatEnum: {
  readonly Url: "url"
  readonly B64Json: "b64_json"
}
export declare type CreateImageRequestResponseFormatEnum =
  typeof CreateImageRequestResponseFormatEnum[keyof typeof CreateImageRequestResponseFormatEnum]
/**
 *
 * @export
 * @interface CreateModerationRequest
 */

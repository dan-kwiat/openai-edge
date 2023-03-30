/**
 *
 * @export
 * @interface CreateModerationRequest
 */
export interface CreateModerationRequest {
    /**
     *
     * @type {CreateModerationRequestInput}
     * @memberof CreateModerationRequest
     */
    'input': CreateModerationRequestInput;
    /**
     * Two content moderations models are available: `text-moderation-stable` and `text-moderation-latest`.  The default is `text-moderation-latest` which will be automatically upgraded over time. This ensures you are always using our most accurate model. If you use `text-moderation-stable`, we will provide advanced notice before updating the model. Accuracy of `text-moderation-stable` may be slightly lower than for `text-moderation-latest`.
     * @type {string}
     * @memberof CreateModerationRequest
     */
    'model'?: string;
}
/**
 * @type CreateModerationRequestInput
 * The input text to classify
 * @export
 */
export declare type CreateModerationRequestInput = Array<string> | string;
/**
 *
 * @export
 * @interface CreateModerationResponse
 */
export interface CreateModerationResponse {
    /**
     *
     * @type {string}
     * @memberof CreateModerationResponse
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof CreateModerationResponse
     */
    'model': string;
    /**
     *
     * @type {Array<CreateModerationResponseResultsInner>}
     * @memberof CreateModerationResponse
     */
    'results': Array<CreateModerationResponseResultsInner>;
}
/**
 *
 * @export
 * @interface CreateModerationResponseResultsInner
 */
export interface CreateModerationResponseResultsInner {
    /**
     *
     * @type {boolean}
     * @memberof CreateModerationResponseResultsInner
     */
    'flagged': boolean;
    /**
     *
     * @type {CreateModerationResponseResultsInnerCategories}
     * @memberof CreateModerationResponseResultsInner
     */
    'categories': CreateModerationResponseResultsInnerCategories;
    /**
     *
     * @type {CreateModerationResponseResultsInnerCategoryScores}
     * @memberof CreateModerationResponseResultsInner
     */
    'category_scores': CreateModerationResponseResultsInnerCategoryScores;
}
/**
 *
 * @export
 * @interface CreateModerationResponseResultsInnerCategories
 */
export interface CreateModerationResponseResultsInnerCategories {
    /**
     *
     * @type {boolean}
     * @memberof CreateModerationResponseResultsInnerCategories
     */
    'hate': boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateModerationResponseResultsInnerCategories
     */
    'hate/threatening': boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateModerationResponseResultsInnerCategories
     */
    'self-harm': boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateModerationResponseResultsInnerCategories
     */
    'sexual': boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateModerationResponseResultsInnerCategories
     */
    'sexual/minors': boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateModerationResponseResultsInnerCategories
     */
    'violence': boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateModerationResponseResultsInnerCategories
     */
    'violence/graphic': boolean;
}
/**
 *
 * @export
 * @interface CreateModerationResponseResultsInnerCategoryScores
 */
export interface CreateModerationResponseResultsInnerCategoryScores {
    /**
     *
     * @type {number}
     * @memberof CreateModerationResponseResultsInnerCategoryScores
     */
    'hate': number;
    /**
     *
     * @type {number}
     * @memberof CreateModerationResponseResultsInnerCategoryScores
     */
    'hate/threatening': number;
    /**
     *
     * @type {number}
     * @memberof CreateModerationResponseResultsInnerCategoryScores
     */
    'self-harm': number;
    /**
     *
     * @type {number}
     * @memberof CreateModerationResponseResultsInnerCategoryScores
     */
    'sexual': number;
    /**
     *
     * @type {number}
     * @memberof CreateModerationResponseResultsInnerCategoryScores
     */
    'sexual/minors': number;
    /**
     *
     * @type {number}
     * @memberof CreateModerationResponseResultsInnerCategoryScores
     */
    'violence': number;
    /**
     *
     * @type {number}
     * @memberof CreateModerationResponseResultsInnerCategoryScores
     */
    'violence/graphic': number;
}
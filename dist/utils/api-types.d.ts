/**
 * Utility helper for API request parameters that include a body.
 * Use this when calling API endpoints that accept request bodies but
 * don't have proper body parameter definitions in the OpenAPI spec.
 *
 * Usage: withBody({ body: myPayload })
 */
export declare function withBody<T = unknown>(params: {
    body?: T;
} & Record<string, unknown>): any;

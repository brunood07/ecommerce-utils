/**
 *
 * @param {string} defaultPath
 * @returns {redirectPath: string, getPathWithRedirect: (path: string) => string}
 */
export declare const useRedirectPath: (defaultPath?: string) => {
    redirectPath: string;
    getPathWithRedirect: (path: string, redirectPath: string) => string;
};

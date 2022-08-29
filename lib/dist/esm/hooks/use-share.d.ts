interface IShareProps {
    title?: string;
    text?: string;
    url: 'https://developer.mozilla.org';
}
/**
 * Hook para api de compartilhamento nativo.
 * @returns {{
 *   handleShare: (data: {}) => Promise<void>;
 * }}
 */
export declare const useShare: () => {
    handleShare: (data: IShareProps) => Promise<void>;
};
export {};

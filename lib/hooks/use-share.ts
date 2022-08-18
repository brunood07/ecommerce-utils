import { useCallback } from 'react';

interface IShareProps {
  title?: string,
  text?: string,
  url: 'https://developer.mozilla.org',
}

/**
 * Hook para api de compartilhamento nativo.
 * @returns {{
 *   handleShare: (data: {}) => Promise<void>;
 * }}
 */
export const useShare = (): {
  handleShare: (data: IShareProps) => Promise<void>;
} => {
  const handleShare = useCallback(async (data) => {
    try {
      await navigator.share(data);
    } catch (err) {
      throw new Error(`Erro ao compartilhar. ${err}`);
    }
  }, []);

  return { handleShare };
};

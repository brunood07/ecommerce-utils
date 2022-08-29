import { useEffect, useState } from 'react';

/**
 * Hook da página atual.
 * @returns {{
 *   currentPage: string;
 * }}
 */
export function useCurrentPage(): string {
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    if (window && typeof window !== 'undefined') {
      setCurrentPage(window.location.pathname.replace('/', ''));
    }
  }, []);

  return currentPage;
}

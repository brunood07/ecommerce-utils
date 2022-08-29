import { useEffect, useState } from 'react';

/**
 * Hook para extrair um parâmetro da url.
 * @param {string} param Parâmetro desejado.
 * @returns {{
 *   paramState: string
 * }}
 */
export function useParams(param: string): string {
  const [paramState, setParamState] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof param !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlParam = params.get(param);
      if (urlParam) {
        setParamState(urlParam);
      }
    }
  }, [param]);

  return paramState;
}

import { useEffect, useState } from 'react';

/**
 * Hook get baseURL.
 * @returns {{
 *   baseUrl: string;
 *   url: string;
 * }}
 */
export function useBaseUrl(): {
  baseUrl: string;
  url: string;
} {
  const [baseUrl, setBaseUrl] = useState<string>('');
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBaseUrl(`${window.location.protocol}//${window.location.host}`);
      setUrl(window.location.href);
    }
  }, []);

  return {
    baseUrl,
    url
  };
}

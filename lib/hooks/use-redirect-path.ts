import { useCallback, useEffect, useState } from 'react';

import { getSafePath } from '../helpers';

const REDIRECT_KEY = 'dest';
const PAGE_HOME_LINK = 'home'

/**
 *
 * @param {string} defaultPath
 * @returns {redirectPath: string, getPathWithRedirect: (path: string) => string}
 */
export const useRedirectPath = (defaultPath = PAGE_HOME_LINK) => {
  const [redirectPath, setRedirectPath] = useState('');

  useEffect(() => {
    const { searchParams } = new URL(document.location.href);
    const destination = searchParams.get(REDIRECT_KEY);

    if (!destination) return setRedirectPath(defaultPath);

    const path = getSafePath(decodeURIComponent(window.atob(destination)));

    if (path === '/') return setRedirectPath(defaultPath);

    setRedirectPath(path);
  }, [defaultPath]);

  const getPathWithRedirect = useCallback((path: string, redirectPath: string) => {
    if (!String(redirectPath).startsWith('/')) redirectPath = `/${redirectPath}`;

    const url = new URL(path, 'http://localhost');
    url.searchParams.append(REDIRECT_KEY, window.btoa(encodeURIComponent(redirectPath)));

    return `${url.pathname}${url.search}`;
  }, []);

  return { redirectPath, getPathWithRedirect };
};

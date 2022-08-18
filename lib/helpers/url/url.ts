export function getSafePath(path = '/') {
  const { pathname } = new URL(path, 'http://localhost');

  return pathname;
};

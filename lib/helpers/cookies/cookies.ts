export const createCookie = (key: string, value: boolean) => {
  const date = new Date();
  date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
  document.cookie = `${key}=${value};expires=${date.toUTCString()};path=/`;
};

export const removeCookie = (cookie: string) => {
  if (cookie) {
    const curDate = new Date();
    document.cookie = `${cookie};expires=${curDate.toUTCString()}`;
    document.cookie = `${cookie};expires=${curDate.toUTCString()};path=/`;
    for (
      let domainSplit = document.location.hostname.split(".");
      domainSplit.length;

    ) {
      const curDomain = domainSplit.join(".");
      document.cookie = `${cookie};expires=${curDate.toUTCString()};domain=${curDomain}`;
      document.cookie = `${cookie};path=/;expires=${curDate.toUTCString()};domain=${curDomain}`;
      domainSplit.shift();
    }
  }
};

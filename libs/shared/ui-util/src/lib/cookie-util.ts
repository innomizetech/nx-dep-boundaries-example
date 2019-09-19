export function setCookie(
  cookieName: string,
  value: string,
  expireSeconds: number = 60
): void {
  const d = new Date();
  d.setTime(d.getTime() + expireSeconds * 1000);
  document.cookie =
    cookieName + '=' + value + ';' + 'expires=' + d.toUTCString() + ';path=/';
}

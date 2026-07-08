import Cookies from 'js-cookie';

export function setCookie(name: string, value: string, days: number = 7): void {
  Cookies.set(name, value, {
    expires: days,
    secure: true,
    sameSite: 'strict',
    path: '/',
  });
}

export function getCookie(name: string): string | undefined {
  return Cookies.get(name);
}

export function removeCookie(name: string): void {
  Cookies.remove(name, { path: '/' });
}

export function hasCookie(name: string): boolean {
  return Cookies.get(name) !== undefined;
}

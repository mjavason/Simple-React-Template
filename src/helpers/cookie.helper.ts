import cookie from 'js-cookie';

export function setCookie(name: string, value: string, days: number = 7): void {
  cookie.set(name, value, {
    expires: days,
    secure: true,
    sameSite: 'strict',
    path: '/',
  });
}

export function getCookie(name: string): string | undefined {
  return cookie.get(name);
}

export function removeCookie(name: string): void {
  cookie.remove(name, { path: '/' });
}

export function hasCookie(name: string): boolean {
  return cookie.get(name) !== undefined;
}

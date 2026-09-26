import cookie from 'js-cookie';
import { CookieKeys } from './constants';

function handleAuthError(status: number) {
  if (status === 401) {
    // clear auth state
    cookie.remove(CookieKeys.TOKEN);
    cookie.set(CookieKeys.ERROR_MESSAGE, 'Session expired');

    // optional: clear other client caches
    if (typeof window !== 'undefined') {
      sessionStorage.clear();
      localStorage.clear();
    }

    // hard redirect
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }

    // stop further execution
    throw new Error('Forbidden');
  }
}

export async function getJson<T>(url: string): Promise<T> {
  const token = cookie.get(CookieKeys.TOKEN);
  const headers: HeadersInit = {};
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(url, {
    method: 'GET',
    headers,
  });

  handleAuthError(res.status);

  if (!res.ok) {
    let message = 'Request failed';
    try {
      const data = await res.json();
      message = data?.message || JSON.stringify(data);
    } catch {
      message = await res.text();
    }
    throw new Error(message);
  }

  return res.json() as Promise<T>;
}

export async function mutateJson<TOutput>(
  url: string,
  body: unknown,
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' = 'POST',
  param: Record<string, string | number> = {},
  query: Record<string, string> = {},
): Promise<TOutput> {
  const token = cookie.get(CookieKeys.TOKEN);
  const headers: HeadersInit = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(buildUrl(url, param, query), {
    method,
    headers,
    body: JSON.stringify(body),
  });

  handleAuthError(res.status);

  if (!res.ok) {
    let message = 'Request failed';
    try {
      const data = await res.json();
      message = data?.message || JSON.stringify(data);
    } catch {
      message = await res.text();
    }
    throw new Error(message);
  }

  return res.json() as Promise<TOutput>;
}

/**
 *
 * @param baseUrl Url with the params specified (:id)
 * @param param Simple object containing parameter values
 * @param query Simple object containing query values
 * @returns Fully built URL string
 */
export function buildUrl(
  baseUrl: string,
  param: Record<string, string | number> = {},
  query: Record<string, string> = {},
): string {
  let url = baseUrl;
  Object.entries(param).forEach(([key, value]) => {
    url = url.replace(`:${key}`, encodeURIComponent(value));
  });

  const queryString = new URLSearchParams(query).toString();
  if (queryString) {
    url += `?${queryString}`;
  }
  return url;
}

import { CookieKeys } from "../config/constants";
import { getCookie } from "./cookies.util";

export async function getJson<T>(url: string): Promise<T> {
  const token = getCookie(CookieKeys.AUTH_TOKEN);
  const headers: HeadersInit = {};
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(url, {
    method: 'GET',
    headers,
  });

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
  const token = getCookie(CookieKeys.AUTH_TOKEN);
  const headers: HeadersInit = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(buildUrl(url, param, query), {
    method,
    headers,
    body: JSON.stringify(body),
  });

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

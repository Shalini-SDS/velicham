// Centralized API helper to keep backend URL usage consistent.
const BASE = import.meta.env.VITE_BACKEND_URL || '';

export function apiUrl(path: string) {
  if (!path) return BASE;
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
}

export async function apiFetch(path: string, options?: RequestInit): Promise<Response> {
  return fetch(apiUrl(path), options);
}

export default apiFetch;

export type CacheEntry<T> = { value: T; ts: number; ttl: number };

const now = () => Date.now();

export function setCache<T>(key: string, value: T, ttlMs: number) {
  const entry: CacheEntry<T> = { value, ts: now(), ttl: ttlMs };
  localStorage.setItem(key, JSON.stringify(entry));
}

export function getCache<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const entry = JSON.parse(raw) as CacheEntry<T>;
    if (!entry || typeof entry.ts !== 'number' || typeof entry.ttl !== 'number') {
      localStorage.removeItem(key);
      return null;
    }
    if (now() - entry.ts > entry.ttl) {
      localStorage.removeItem(key);
      return null;
    }
    return entry.value as T;
  } catch {
    return null;
  }
}

const bucket = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string, limit = 30, windowMs = 60_000) {
  const now = Date.now();
  const existing = bucket.get(key);

  if (!existing || existing.resetAt < now) {
    bucket.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, resetAt: now + windowMs };
  }

  if (existing.count >= limit) {
    return { ok: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  bucket.set(key, existing);
  return { ok: true, remaining: limit - existing.count, resetAt: existing.resetAt };
}

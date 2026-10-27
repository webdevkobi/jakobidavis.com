export interface Row {
  price: number;
  gas: number;
  share: number;
  cost: string;
}

/**
 * The capstone ran the average year at every $5 step from $0 to $55, so the
 * slider steps land exactly on model output and nothing is interpolated.
 * Anything off the grid is a bug rather than a value to invent, so this
 * snaps to the nearest run and never makes up a point between two.
 */
export function rowAtPrice(rows: Row[], price: number): Row {
  const sorted = [...rows].sort((a, b) => a.price - b.price);
  const exact = sorted.find((r) => r.price === price);
  if (exact) return exact;

  return sorted.reduce((best, r) =>
    Math.abs(r.price - price) < Math.abs(best.price - price) ? r : best,
  );
}

/** One decimal, matching the precision the paper reports. */
export const formatShare = (share: number): string => `${share.toFixed(1)}%`;

export const formatPrice = (price: number): string => `$${price}/t`;

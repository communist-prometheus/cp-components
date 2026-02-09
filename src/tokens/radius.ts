export const radius = {
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
} as const;

export type Radius = typeof radius;
export type RadiusKey = keyof Radius;

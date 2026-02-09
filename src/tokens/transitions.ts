export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export type Transitions = typeof transitions;
export type TransitionKey = keyof Transitions;

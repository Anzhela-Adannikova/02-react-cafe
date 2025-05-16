// Загальні типи, які використовуються в кількох компонентах,
export type VoteType = "good" | "neutral" | "bad";

export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

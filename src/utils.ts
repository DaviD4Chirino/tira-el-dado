/**
 * Gets a random floating number between min and max
 * @param min number (inclusive)
 * @param max number (inclusive)
 * @returns number
 */
export function getRandomNumberRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function clamp(num: number, lower: number, upper: number) {
  return Math.min(Math.max(num, lower), upper);
}

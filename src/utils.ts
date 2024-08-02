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

/**
 * returns a random number between 0 and the  {@link faces} (inclusive)
 * @param faces number
 * @returns number
 */
export function getDieRoll(faces: number): number {
  return Math.floor(Math.random() * faces + 1);
}

export function newArray(size: number, populate: any): any[] {
  var x: any[] = [];
  for (var i = 0; i < size; ++i) {
    x[i] = populate;
  }
  return x;
}

export function getSumArray(arr: number[]): number {
  var n: number = 0;
  for (let i = 0; i < arr.length; i++) {
    const element: number = arr[i];

    n = n + element;
  }

  return n;
}

export function getRollInfo(rolls: number[], faces: number): rollInfo {
  const data: rollInfo = {
    faces,
    rolls,
    result: getSumArray(rolls),
    diceAmount: rolls.length,
    date: new Date(),
  };

  return data;
}

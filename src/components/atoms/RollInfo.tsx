import { getSumArray } from "../../utils";

export function RollTitle({ faces, dice }: { faces: number; dice: number }) {
  const title: string = `${dice > 1 ? dice : ""}D${faces}`;
  return <data value={title}>{title}</data>;
}

export function RollsArray({
  rolls,
  naked = false,
}: {
  rolls: number[];
  /**
   * Determines wether it returns a data tag or just the numbers
   */
  naked?: boolean;
}) {
  if (naked) {
    return <>{rolls.map((roll) => `${roll}`)}</>;
  }

  return (
    <data>
      {rolls.map(
        (roll, index) => `${roll}${index != rolls.length - 1 ? ", " : ""}`
      )}
    </data>
  );
}

export function RollResult({ rolls }: { rolls: number[] }) {
  const result: number = getSumArray(rolls);
  return <data value={result}>{result}</data>;
}

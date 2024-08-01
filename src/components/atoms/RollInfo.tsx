import { getSumArray } from "../../utils";

export function RollTitle({ faces, dice }: { faces: number; dice: number }) {
  const title: string = `${dice > 1 ? dice : ""}D${faces}`;
  return <data value={title}>{title}</data>;
}

export function RollsArray({
  rolls,
  naked = false,
  className,
}: {
  rolls: number[];
  className?: string;
  /**
   * Determines wether it returns a data tag or just the numbers
   */
  naked?: boolean;
}) {
  if (naked) {
    return <>{rolls.map((roll) => `${roll}`)}</>;
  }

  return (
    <data className={className}>
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

export function RollDate({ date }: { date: Date }) {
  const time = date.toLocaleString("es", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  return <data value={time}>{time}</data>;
}

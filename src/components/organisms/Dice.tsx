import Die from "../molecules/Die";

const diceFaces: number[] = [4, 6, 8, 10, 12, 20, 100];

export default function Dice() {
  return (
    <>
      {diceFaces.map((dieNumber) => (
        <Die faces={dieNumber} key={dieNumber} />
      ))}
    </>
  );
}

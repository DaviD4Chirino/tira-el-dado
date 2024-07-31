import Dice from "../molecules/Dice";

export default function DiceSection() {
  return (
    <section
      className="grid grid-cols-[repeat(auto-fill,8rem)] lg:grid-cols-[repeat(auto-fill,15rem)]  justify-center gap-8"
      id="Dice"
    >
      <Dice />
    </section>
  );
}

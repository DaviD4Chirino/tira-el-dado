import { useContext } from "react";
import RollData from "../molecules/RollData";
import { HistoryContext } from "../../contexts/History";

export default function RollHistorySection() {
  const { history } = useContext(HistoryContext);
  return (
    <section id="RollHistory">
      <RollData
        className=" "
        variant="inline"
        rollInfo={
          history
            ? history[history.length - 1]
            : {
                faces: 0,
                rolls: [0],
                result: 0,
                diceAmount: 0,
                date: new Date(),
              }
        }
      />
    </section>
  );
}

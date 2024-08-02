import { useContext } from "react";
import RollData from "../molecules/RollData";
import { HistoryContext } from "../../contexts/History";

export default function RollHistorySection({ logs = 3 }: { logs?: number }) {
  const { history } = useContext(HistoryContext);
  const newestRolls = history?.slice(Math.max(history.length - logs, 1));

  return (
    <section id="RollHistory">
      <div
        className={`grid grid-rows-${logs} gap-3 place-content-start align-baseline`}
      >
        {newestRolls &&
          newestRolls.reverse().map((roll, index) => (
            <RollData
              rollInfo={roll}
              variant="inline"
              key={index}
              // style={{ zoom: 1 - index * 0.15 }}
            />
          ))}
      </div>
    </section>
  );
}

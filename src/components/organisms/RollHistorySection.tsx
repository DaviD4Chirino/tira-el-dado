import { useContext } from "react";
import RollData from "../molecules/RollData";
import { HistoryContext } from "../../contexts/History";
import { Button } from "@mui/material";

export default function RollHistorySection({ logs = 3 }: { logs?: number }) {
  const { history } = useContext(HistoryContext);
  const newestRolls = history?.slice(Math.max(history.length - logs, 1));

  return (
    <section id="RollHistory">
      <div className={`grid grid-rows-${logs} gap-2 place-content-start`}>
        {newestRolls &&
          newestRolls
            .reverse()
            .map((roll, index) => (
              <RollData rollInfo={roll} variant="inline" key={index} />
            ))}
      </div>
    </section>
  );
}

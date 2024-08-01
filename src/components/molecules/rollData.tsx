import { Button } from "@mui/material";
import { RollResult, RollsArray, RollTitle } from "../atoms/RollInfo";

export default function RollData({
  rollInfo,
  variant,
  className,
  style,
}: {
  className?: string;
  style?: React.HTMLAttributes<HTMLLIElement>["style"];
  rollInfo: rollInfo;
  variant: "inline";
}) {
  const { rolls, faces, date, diceAmount } = rollInfo;
  switch (variant) {
    case "inline":
      return (
        <li
          id="RollItem"
          className={
            className +
            " text-sm list-none bg-secondary rounded-full w-min max-w-44  flex items-baseline gap-2"
          }
          style={style}
        >
          <Button
            sx={{
              paddingInline: "1rem",
              paddingBlock: "4px",
              margin: 0,
              minWidth: 0,
              minHeight: 0,
              color: "inherit",
              borderRadius: 999,
            }}
            className="bg-secondary w-full"
          >
            <b className="text-base min-w-[4ch]">
              <RollResult rolls={rolls} />
            </b>
            <p className="text-sm inline min-w-[6ch]">
              <RollTitle faces={faces} dice={diceAmount} />
            </p>
            {rolls.length > 1 && (
              <p className="inline truncate text-ellipsis flex-1 text-xs min-w-[5ch] ">
                (<RollsArray rolls={rolls} />)
              </p>
            )}
          </Button>
        </li>
      );

    default:
      return <></>;
  }
}

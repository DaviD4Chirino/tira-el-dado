import { RollResult, RollsArray, RollTitle } from "../atoms/RollInfo";

export default function RollData({
  rollInfo,
  variant,
  className,
}: {
  className?: string;
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
            " text-sm list-none bg-secondary rounded-full px-4 py-1 w-min max-w-44  flex items-baseline gap-2"
          }
        >
          <b className="text-base">
            <RollResult rolls={rolls} />
          </b>
          <p className="text-sm inline">
            <RollTitle faces={faces} dice={diceAmount} />
          </p>
          {rolls.length > 1 && (
            <p className="inline truncate text-ellipsis flex-1 text-xs ">
              (<RollsArray rolls={rolls} />)
            </p>
          )}
        </li>
      );

    default:
      return <></>;
  }
}

import { Button, ButtonProps } from "@mui/material";
import { RollResult, RollsArray, RollTitle } from "../atoms/RollInfo";
import { useState } from "react";
import HistoryDialog from "./HistoryDialog";

export default function RollData({
  rollInfo,
  variant = "contained",
  className,
  style,
}: {
  className?: string;
  style?: React.HTMLAttributes<HTMLLIElement>["style"];
  rollInfo: rollInfo;
  variant: "inline" | "contained";
}) {
  const { rolls, faces, diceAmount } = rollInfo;

  switch (variant) {
    case "inline":
      return (
        <li
          id="RollItem"
          className={`${className ? className : ""} 
          bg-secondary 
          rounded-full w-min max-w-64  
          text-sm list-none 
          
          `}
          style={style}
        >
          <InfoButton rolls={rolls} faces={faces} diceAmount={diceAmount} />
        </li>
      );

    case "contained":
      return <li id="RollItem" className={className + " "} style={style}></li>;

    default:
      return <></>;
  }
}
function InfoButton({
  rolls,
  faces,
  diceAmount,
  buttonProps,
}: {
  rolls: number[];
  faces: number;
  diceAmount: number;
  buttonProps?: ButtonProps;
}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      {" "}
      <Button
        onClick={handleClickOpen}
        sx={{
          paddingInline: "1rem",
          paddingBlock: "4px",
          margin: 0,
          color: "inherit",
          borderRadius: 999,
        }}
        className="bg-secondary w-full"
        {...buttonProps}
      >
        <div
          className="
      w-full
      flex gap-2
      flex-shrink-0
      place-items-center
      align-baseline 
      "
        >
          <b className="text-base  text-left   ">
            <RollResult rolls={rolls} />
          </b>
          <p className={`text-sm inline  text-left  `}>
            <RollTitle faces={faces} dice={diceAmount} />
          </p>
          {rolls.length > 1 && (
            <p className="inline truncate  text-left text-ellipsis flex-1 text-xs opacity-80 ">
              (<RollsArray rolls={rolls} />)
            </p>
          )}
        </div>
      </Button>
      <HistoryDialog open={open} setOpen={setOpen} />
    </>
  );
}

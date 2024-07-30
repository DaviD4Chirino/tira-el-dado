import { Button } from "@mui/material";
import { GiDiceTwentyFacesTwenty as D20 } from "react-icons/gi";
import { TiMinus as Minus, TiPlus as Plus } from "react-icons/ti";
import RollDialog from "./RollDialog";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  MouseEventHandler,
  useState,
} from "react";

import { clamp } from "../../utils";
import DieIcon from "../atoms/DieIcon";

export default function Die({ faces }: dieProps) {
  const [diceCounter, setDiceCounter] = useState(1);

  return (
    <div
      className="max-w-40 sm:max-w-48 aspect-square grid grid-rows-2 rounded-md shadow-2xl"
      id="Die"
    >
      <RollDialog
        buttonProps={{
          className: "row-span-2",
          variant: "text",
        }}
        trows={diceCounter}
        faces={faces}
      >
        <DieIcon
          faces={faces}
          iconProps={{ className: "size-20 sm:size-28 drop-shadow-2xl" }}
        />
      </RollDialog>

      <DieControls
        onMinusClick={() => {
          setDiceCounter(clamp(diceCounter - 1, 1, 99));
        }}
        onPlusClick={() => {
          setDiceCounter(clamp(diceCounter + 1, 1, 99));
        }}
      >
        <DieTitle faces={faces} totalDices={diceCounter} />
      </DieControls>
    </div>
  );
}

function DieTitle({
  faces,
  totalDices,
}: {
  faces: number;
  totalDices: number;
}) {
  return (
    <p id="Title" className="align-middle col-span-4 text-center ">
      D{faces}{" "}
      {totalDices > 1 && <sup className="align-middle">* {totalDices}</sup>}
    </p>
  );
}

function DieControls({
  onMinusClick,
  onPlusClick,
  children,
}: {
  onMinusClick: MouseEventHandler<HTMLButtonElement> | undefined;
  onPlusClick: MouseEventHandler<HTMLButtonElement> | undefined;
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) {
  function CustomButton(props: {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    children:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | null
      | undefined;
  }) {
    return (
      <Button
        disableElevation
        variant="contained"
        id="Minus"
        sx={{
          minWidth: 0,
          minHeight: 0,
          padding: 0,
          margin: 0,
        }}
        className=" col-span-3"
        onClick={props.onClick}
      >
        {props.children}
      </Button>
    );
  }
  return (
    <div className="grid gap-3 grid-cols-10 rounded-md justify-between   bg-secondary">
      <CustomButton onClick={onMinusClick}>
        <Minus className="size-5" />
      </CustomButton>
      {children}
      <CustomButton onClick={onPlusClick}>
        <Plus className="size-5" />
      </CustomButton>
    </div>
  );
}

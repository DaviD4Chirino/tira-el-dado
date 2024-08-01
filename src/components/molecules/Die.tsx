import { Button, SxProps } from "@mui/material";
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
import { Theme } from "@emotion/react";

import "./css/Die.css";
import { RollDate, RollTitle } from "../atoms/RollInfo";

export default function Die({ faces }: dieProps) {
  const [diceCounter, setDiceCounter] = useState(1);

  return (
    <div
      className=" max-w-32 lg:max-w-48 aspect-square grid grid-rows-2 rounded-md outline outline-1 outline-primary shadow-inner"
      id="Die"
    >
      <RollDate date={new Date()} />
      <RollDialog
        buttonProps={{
          className: "row-span-2",
        }}
        trows={diceCounter}
        faces={faces}
      >
        <DieIcon
          faces={faces}
          iconProps={{
            className: "size-14 lg:size-28 drop-shadow-2xl icon transition-all",
          }}
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
    <b
      id="Title"
      className="align-middle col-span-4 text-center text-sm sm:text-base h-7 sm:h-auto flex items-center content-center justify-center font-mono"
    >
      <RollTitle faces={faces} dice={totalDices} />
    </b>
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
  return (
    <div className="grid gap-3 grid-cols-10 rounded-md justify-between   bg-secondary">
      <CustomButton sx={{ borderBottomRightRadius: 0 }} onClick={onMinusClick}>
        <Minus className="size-5" />
      </CustomButton>
      {children}
      <CustomButton sx={{ borderBottomLeftRadius: 0 }} onClick={onPlusClick}>
        <Plus className="size-5" />
      </CustomButton>
    </div>
  );
}

function CustomButton(props: {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  sx?: SxProps<Theme>;
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
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        ...props.sx,
      }}
      className=" col-span-3 "
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}

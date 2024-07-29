import { Button } from "@mui/material";
import { GiDiceTwentyFacesTwenty as D20 } from "react-icons/gi";
import { TiMinus as Minus, TiPlus as Plus } from "react-icons/ti";
import RollDialog from "./RollDialog";
export default function RollDie() {
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
      >
        <D20 className="size-20 sm:size-28 drop-shadow-2xl" />
      </RollDialog>

      <div className="grid gap-3 grid-cols-10 rounded-md justify-between   bg-secondary">
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
        >
          <Minus className="size-5" />
        </Button>
        <DieTitle faces={20} totalDices={0} />
        <Button
          disableElevation
          className="col-span-3"
          variant="contained"
          id="Plus"
          sx={{ minWidth: 0, minHeight: 0, padding: 0, margin: 0 }}
        >
          <Plus className="size-5" />
        </Button>
      </div>
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
      {totalDices > 0 && <sup className="align-middle">* {totalDices}</sup>}
    </p>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Dialog } from "@mui/material";
import { useEffect, useState } from "react";
import DieRollAnimation from "../atoms/DieRollAnimation";
import { getDieRoll, getSumArray } from "../../utils";

export default function RollDialog({
  children,
  dialogProps = { open: false },
  buttonProps,
  trows = 1,
  faces,
}: rollDialogProps) {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState(0);
  const [rolls, setRolls] = useState<number[]>(populateRolls(trows, faces));

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    // setResult(0);
  }

  useEffect(() => {
    if (open) {
      setRolls(populateRolls(trows, faces));
    }

    return () => {};
  }, [open]);

  useEffect(() => {
    setResult(getSumArray(rolls));
    return () => {};
  }, [rolls]);

  return (
    <>
      <Button {...buttonProps} onClick={handleClickOpen}>
        {children}
      </Button>
      <Dialog {...dialogProps} open={open} onClose={handleClose}>
        {open && (
          <div className="size-52 sm:size-60 grid grid-rows-10 content-center items-center overflow-visible">
            <h1
              className={`text-center sm:text-5xl ${
                trows > 1 ? "row-span-8" : "row-span-10"
              }`}
              id="Result"
            >
              {/* 1400 */}
              {result > -1 && (
                <DieRollAnimation
                  faces={faces}
                  value={result}
                  duration={800 + 200 * (rolls.length - 1)}
                />
              )}
            </h1>

            {rolls.length > 1 && (
              <div className="flex text-center px-5 overflow-x-auto   row-span-2">
                {rolls.map((roll: number, index: number) => (
                  <>
                    <DieRollAnimation
                      value={roll}
                      faces={faces}
                      duration={800 + 200 * index}
                      key={index}
                      className="min-w-5"
                    />

                    {index + 1 < rolls.length && (
                      <span key={index + 999} className="min-w-5">
                        |
                      </span>
                    )}
                  </>
                ))}
              </div>
            )}
            {/* {trows > 1 && (
              <div
                className="flex text-center px-5 overflow-x-auto   row-span-2"
                key={trows}
              >
                {[...Array(trows)].map((e, i) => (
                  <>
                    <DieRollAnimation
                      key={i}
                      min={1}
                      max={20}
                      speed={50}
                      duration={1000 + i * 200}
                      className="min-w-5"
                      onRollEnd={addResult}
                    />
                    
                  </>
                ))}
              </div>
            )} */}
          </div>
        )}
      </Dialog>
    </>
  );
}

function populateRolls(length: number, faces: number): number[] {
  var arr: number[] = [];

  for (let i = 0; i < length; i++) {
    arr.push(getDieRoll(faces));
  }

  return arr;
}

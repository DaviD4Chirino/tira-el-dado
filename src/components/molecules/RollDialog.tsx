/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, ButtonProps, Dialog, DialogProps } from "@mui/material";
import { useState } from "react";
import RandomNumber from "../atoms/RandomNumber";

export default function RollDialog({
  children,
  dialogProps = { open: false },
  buttonProps,
  trows = 1,
}: rollDialogProps) {
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button {...buttonProps} onClick={handleClickOpen}>
        {children}
      </Button>
      <Dialog {...dialogProps} open={open} onClose={handleClose}>
        {open && (
          <div className=" size-40 sm:size-60 grid grid-rows-10 content-center items-center overflow-hidden">
            <h1 className="text-center text-md sm:text-5xl row-span-9">
              <RandomNumber min={1} max={20} speed={50} duration={1000} />
            </h1>
            {trows > 1 && (
              <div className="px-2 h-[5ch] grid grid-cols-10  justify-center  text-center overflow-y-scroll">
                {[...Array(trows)].map((e, i) => (
                  <>
                    <RandomNumber
                      key={e}
                      min={1}
                      max={20}
                      speed={50}
                      duration={1000}
                    />
                    {i + 1 < Array(trows).length && <span className="">|</span>}
                  </>
                ))}
              </div>
            )}
          </div>
        )}
      </Dialog>
    </>
  );
}

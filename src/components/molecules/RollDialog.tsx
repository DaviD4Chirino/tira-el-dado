/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, ButtonProps, Dialog, DialogProps } from "@mui/material";
import { useState } from "react";
import RandomNumber from "../atoms/RandomNumber";

export default function RollDialog({
  children,
  dialogProps = { open: false },
  buttonProps,
}: {
  children: any;
  dialogProps?: DialogProps;
  buttonProps?: ButtonProps;
}) {
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
          <div className="container size-40 grid place-content-center">
            <h1 className="text-center">
              <RandomNumber
                min={0}
                max={20}
                finalValue={20}
                speed={50}
                duration={1000}
              />
            </h1>
          </div>
        )}
      </Dialog>
    </>
  );
}

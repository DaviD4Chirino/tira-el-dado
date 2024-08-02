import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function HistoryDialog({
  open,
  setOpen = () => {},
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose} id="HistoryDialog">
      <DialogTitle id="HistoryDialogTitle">
        <h4>History</h4>
      </DialogTitle>
      HistoryDialog
    </Dialog>
  );
}

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import RollData from "./RollData";
import { useContext } from "react";
import { HistoryContext } from "../../contexts/History";

export default function HistoryDialog({
  open,
  setOpen = () => {},
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { history } = useContext(HistoryContext);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose} id="HistoryDialog">
      <DialogTitle id="HistoryDialogTitle">
        <h3>Historial</h3>
      </DialogTitle>
      {history && (
        <ul className="aspect-square grid gap-5 p-3">
          {history
            .slice(1)
            .reverse()
            .map((roll, index) => (
              <RollData rollInfo={roll} variant="contained" key={index} />
            ))}
        </ul>
      )}
    </Dialog>
  );
}

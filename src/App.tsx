import { useState } from "react";
import "./App.css";
import RandomNumber from "./components/atoms/RandomNumber";
import { Button, Dialog } from "@mui/material";

function App() {
  const [dialog, setDialog] = useState(false);

  const handleClickOpen = () => {
    setDialog(true);
  };

  const handleClose = () => {
    setDialog(false);
  };

  return (
    <section>
      <Button variant="contained" onClick={handleClickOpen}>
        Roll Dice
      </Button>
      <Dialog open={dialog} onClose={handleClose}>
        {dialog && (
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
    </section>
  );
}

export default App;

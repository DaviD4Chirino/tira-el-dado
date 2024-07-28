import "./App.css";
import RollDialog from "./components/molecules/RollDialog";

function App() {
  return (
    <section>
      <RollDialog buttonProps={{ variant: "text" }}>Roll Die</RollDialog>
    </section>
  );
}

export default App;

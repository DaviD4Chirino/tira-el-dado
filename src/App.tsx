import "./App.css";
import RandomNumber from "./components/atoms/RandomNumber";

function App() {
  return (
    <section>
      <RandomNumber
        min={0}
        max={20}
        finalValue={5}
        speed={200}
        duration={1000}
      />
    </section>
  );
}

export default App;

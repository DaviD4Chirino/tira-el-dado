import "./App.css";
import Die from "./components/molecules/Die";

function App() {
  return (
    <section className="container">
      <Die faces={100} />
    </section>
  );
}

export default App;

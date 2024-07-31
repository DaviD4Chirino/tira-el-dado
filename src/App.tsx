import "./App.css";
import Dice from "./components/organisms/Dice";

function App() {
  return (
    <section>
      <div className="container-md mx-auto p-8">
        <div className="grid grid-cols-[repeat(auto-fill,8rem)] lg:grid-cols-[repeat(auto-fill,15rem)]  justify-center  gap-8">
          <Dice />
        </div>
      </div>
    </section>
  );
}

export default App;

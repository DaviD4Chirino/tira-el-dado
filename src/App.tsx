import DiceSection from "./components/organisms/DiceSection";
import RollHistorySection from "./components/organisms/RollHistorySection";

function App() {
  return (
    <section className="min-h-[100vh] container mx-auto">
      <div className="px-8 py-10 md:px-24  grid gap-14 m-h-[100vh] ">
        <DiceSection />
        <RollHistorySection />
      </div>
    </section>
  );
}

export default App;

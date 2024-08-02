import { createContext, useEffect } from "react";
import { useLocalStorage } from "react-use";
import { getRollInfo } from "../utils";

const historyInitialValue: historyContext = {
  history: [
    {
      faces: 0,
      rolls: [0],
      result: 0,
      diceAmount: 0,
      date: new Date(),
    },
  ],
  setHistory() {},
  logRolls(_rolls: rollLog["rolls"]) {},
};

const HistoryContext: React.Context<historyContext> =
  createContext<historyContext>(historyInitialValue);

function HistoryProvider({ children }: { children: any }) {
  /* const [localRolls, setLocalRolls] = useState(
    localStorage.getItem("rolls-log")
      ? localStorage.getItem("rolls-log")
      : HistoryInitialValue
  );
 */

  const [history, setHistory, erase] = useLocalStorage(
    "history",
    historyInitialValue.history
  );

  function logRolls(rolls: rollInfo["rolls"], faces: rollInfo["faces"]): void {
    const newHistory = history?.concat(getRollInfo(rolls, faces));
    setHistory(newHistory);
  }

  useEffect(() => {
    // * Keeping the logs under 21
    if (history && history.length >= 20) {
      const trimmedHistory = history.slice(Math.max(history.length - 20, 1));
      setHistory(trimmedHistory);
    }
    return () => {};
  }, [history]);

  const value: historyContext = {
    history,
    setHistory,
    logRolls,
  };

  return (
    <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
  );
}

export { HistoryProvider, HistoryContext };

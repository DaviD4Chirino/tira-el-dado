import { createContext, useEffect } from "react";
import { useLocalStorage } from "react-use";
import { getRollInfo } from "../utils";

const maxHistory: number = 20;

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
  eraseHistory() {},
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

  const [history, setHistory, eraseHistory] = useLocalStorage(
    "history",
    historyInitialValue.history
  );

  function logRolls(rolls: rollInfo["rolls"], faces: rollInfo["faces"]): void {
    const newHistory = history?.concat(getRollInfo(rolls, faces));
    setHistory(newHistory);
  }

  useEffect(() => {
    // * Keeping the logs under 21
    if (history && history.length >= maxHistory) {
      const trimmedHistory = history.slice(
        Math.max(history.length - maxHistory, 1)
      );
      setHistory(trimmedHistory);
    }
    return () => {};
  }, [history]);

  const value: historyContext = {
    history,
    setHistory,
    logRolls,
    eraseHistory,
  };

  return (
    <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
  );
}

export { HistoryProvider, HistoryContext };

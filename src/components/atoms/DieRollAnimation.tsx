/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useInterval, useTimeoutFn } from "react-use";
import { getDieRoll } from "../../utils";

/**
 * Cycles thought the min and max and ends with the finalValue
 */
export default function DieRollAnimation({
  value,
  faces,
  duration = 1000,
  speed = 50,
  onRollEnd = () => {},
  className,
}: randomNumberProps) {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [rolling, setRolling] = useState(true);

  useInterval(
    () => {
      setDisplayNumber(getDieRoll(faces));
    },
    rolling ? speed : null
  );

  useTimeoutFn(() => {
    setDisplayNumber(value);
    onRollEnd();
    setRolling(false);
  }, duration);

  return (
    <data className={className || ""} value={rolling ? -1 : value}>
      {rolling ? displayNumber : value}
    </data>
  );
}

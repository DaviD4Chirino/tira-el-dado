/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useInterval, useTimeoutFn } from "react-use";
import { getRandomNumberRange } from "../../utils";

/**
 * Cycles thought the min and max and ends with the finalValue
 */
export default function RandomNumber({
  finalValue = -1,
  max,
  min = 0,
  duration = 2000,
  speed = 100,
  onRollEnd = () => {},
}: {
  max: number;
  finalValue?: number;
  min?: number;
  duration?: number;
  speed?: number;
  onRollEnd?: () => void;
}) {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [rolling, setRolling] = useState(true);

  useTimeoutFn(() => {
    setRolling(false);
    onRollEnd();
  }, duration);

  useInterval(
    () => {
      setDisplayNumber(Math.floor(getRandomNumberRange(min, max)));
    },
    rolling ? speed : null
  );

  return (
    <data value={rolling ? -1 : finalValue > -1 ? finalValue : displayNumber}>
      {rolling ? displayNumber : finalValue > -1 ? finalValue : displayNumber}
    </data>
  );
}

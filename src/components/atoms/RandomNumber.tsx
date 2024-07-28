/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useInterval, useTimeoutFn } from "react-use";
import { getRandomNumberRange } from "../../utils";

/**
 * Cycles thought the min and max and ends with the finalValue
 */
export default function RandomNumber({
  finalValue,
  max,
  min = 0,
  duration = 2000,
  speed = 100,
}: {
  min: number;
  max: number;
  duration: number;
  speed: number;
  finalValue: number;
}) {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [rolling, setRolling] = useState(true);

  useTimeoutFn(() => {
    setRolling(false);
  }, duration);

  useInterval(
    () => {
      setDisplayNumber(Math.floor(getRandomNumberRange(min, max)));
    },
    rolling ? speed : null
  );

  return (
    <data value={rolling ? -1 : finalValue}>
      {rolling ? displayNumber : finalValue}
    </data>
  );
}

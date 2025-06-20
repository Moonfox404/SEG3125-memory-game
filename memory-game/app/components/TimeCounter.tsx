"use client";

import { useEffect, useRef, useState } from "react"

type TimeCounterProps = {
  running: boolean;  // reset to pause timer (paused -> running will resume the timer without reset)
  stopped: boolean;  // set to stop timer (stopped -> running will start the timer after resetting it)
  setTime?: (elapsedTime: number) => void;
}

const TimeCounter = ({ running, stopped, setTime }: TimeCounterProps) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const timeoutId = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (!stopped && running) {

      timeoutId.current = setTimeout(() => {
        setElapsedTime(elapsedTime + 1);
        if (setTime) {
          setTime(elapsedTime + 1);
        }
      }, 1000);

    } else {
      clearTimeout(timeoutId.current);
    }
  }, [running, elapsedTime]);

  // allow changing the current value of the counter
  useEffect(() => {
    if (!stopped) {
      // changing from stopped -> running state
      setElapsedTime(0);
      if (setTime) {
        setTime(0);
      }
    } else {
      clearTimeout(timeoutId.current);
    }
  }, [stopped]);

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;
  const paddedSeconds = seconds > 9 ? seconds : "0" + seconds;

  return <div>
    {minutes}:{paddedSeconds}
  </div>;
}

export default TimeCounter;

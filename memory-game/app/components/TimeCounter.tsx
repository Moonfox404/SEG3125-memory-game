"use client";

import { useEffect, useRef, useState } from "react"

type TimeCounterProps = {
  running: boolean;  // reset to pause timer (paused -> running will resume the timer without reset)
  time: number;
  setTime: (elapsedTime: number) => void;
}

const TimeCounter = ({ running, time, setTime }: TimeCounterProps) => {
  const timeoutId = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (running) {

      clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        setTime(time + 1);
      }, 1000);

    } else {
      clearTimeout(timeoutId.current);
    }
  }, [running, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const paddedSeconds = seconds > 9 ? seconds : "0" + seconds;

  return <div>
    {minutes}:{paddedSeconds}
  </div>;
}

export default TimeCounter;

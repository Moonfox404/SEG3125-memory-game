"use client";

import { useEffect, useRef, useState } from "react"

type TimeCounterProps = {
  running: boolean;
  setTime?: (elapsedTime: number) => void;
}

const TimeCounter = ({ running, setTime }: TimeCounterProps) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;

    if (running) {
      timeoutId = setTimeout(() => {
        setElapsedTime(elapsedTime + 1);
        if (setTime) {
          setTime(elapsedTime + 1);
        }
      }, 1000);
    } 

    return () => {clearTimeout(timeoutId);}
  }, [elapsedTime]);

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;
  const paddedSeconds = seconds > 9 ? seconds : "0" + seconds;

  return <div>
    {minutes}:{paddedSeconds}
  </div>;
}

export default TimeCounter;

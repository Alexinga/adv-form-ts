import { useEffect, useRef, useState } from "react";
import { useTimer } from "../store/TimersContext";

export default function useProgressTimer(duration: number) {
  const seconds = duration * 1000;
  const { isRunning } = useTimer();
  const interval = useRef<number | null>(null);
  const [progressFill, setProgressFill] = useState(seconds);
  const remainingTime = (progressFill / 1000).toFixed(2);

  if (progressFill <= 0 && interval.current) {
    clearInterval(interval.current);
  }
  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setProgressFill((fill) => {
          if (fill <= 0) {
            return fill;
          }
          return fill - 50;
        });
      }, 50);
    } else if (interval.current) {
      clearInterval(interval.current);
    }
    return () => clearInterval(timer);
  }, [isRunning]);
  return { progressFill, remainingTime, seconds };
}

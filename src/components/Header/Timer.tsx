"use client";
import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        const tempSeconds = prevSeconds + 1;
        if (tempSeconds > 59) {
          setMinutes((prevMinutes) => prevMinutes + 1);
          return 0;
        }
        return tempSeconds;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="tabular-nums">
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </div>
  );
}

export default Timer;

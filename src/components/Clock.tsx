import React, { useState, useEffect, FC } from "react";
import { getTime, getTimeRemaining } from '../utils/getTime';
import CountdownTracker from "./CountdownTracker";

interface ClockProps {
  countdown?: string | Date;
  callback?: () => void;
}

const Clock: FC<ClockProps> = ({ countdown, callback }) => {
  const [trackers, setTrackers] = useState<React.ReactNode[]>([]);
  const updateFn = countdown ? getTimeRemaining : getTime;

  useEffect(() => {
    const t = updateFn(countdown);

    const newTrackers: React.ReactNode[] = [];
    for (const key in t) {
      if (key === "Total") continue;
      newTrackers.push(<CountdownTracker key={key} label={key} value={t[key]} />);
    }

    setTrackers(newTrackers);

    const intervalId = setInterval(() => {
        const t = updateFn(countdown);
    
        const newTrackers: React.ReactNode[] = [];
        for (const key in t) {
            if (key === "Total") continue;
            newTrackers.push(<CountdownTracker key={key} label={key} value={t[key]} />);
        }
    
        setTrackers(newTrackers);
    
        if (t.Total < 0) {
            clearInterval(intervalId);
            if (callback) callback();
        }
    }, 500);
    

    return () => clearInterval(intervalId);
  }, [countdown, callback, updateFn]);

  return <div className="flip-clock reloj">{trackers}</div>;
};

export default Clock;

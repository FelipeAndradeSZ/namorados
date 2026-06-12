import { useEffect, useState } from "react";

const SECOND = 1000;
const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function calculateElapsedTime(startDate) {
  const startTimestamp = new Date(startDate).getTime();

  if (Number.isNaN(startTimestamp)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isValid: false };
  }

  const elapsedSeconds = Math.max(
    0,
    Math.floor((Date.now() - startTimestamp) / SECOND),
  );

  return {
    days: Math.floor(elapsedSeconds / DAY),
    hours: Math.floor((elapsedSeconds % DAY) / HOUR),
    minutes: Math.floor((elapsedSeconds % HOUR) / MINUTE),
    seconds: elapsedSeconds % MINUTE,
    isValid: true,
  };
}

export function useLoveCounter(startDate) {
  const [elapsedTime, setElapsedTime] = useState(() =>
    calculateElapsedTime(startDate),
  );

  useEffect(() => {
    const updateCounter = () => setElapsedTime(calculateElapsedTime(startDate));

    updateCounter();
    const intervalId = window.setInterval(updateCounter, SECOND);

    return () => window.clearInterval(intervalId);
  }, [startDate]);

  return elapsedTime;
}

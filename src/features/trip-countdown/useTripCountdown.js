import { useEffect, useState } from "react";

const SECOND = 1000;
const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function calculateTimeRemaining(targetDate) {
  const targetTimestamp = new Date(targetDate).getTime();

  if (Number.isNaN(targetTimestamp)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isValid: false, isPast: false };
  }

  const remainingSeconds = Math.floor((targetTimestamp - Date.now()) / SECOND);

  if (remainingSeconds <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isValid: true, isPast: true };
  }

  return {
    days: Math.floor(remainingSeconds / DAY),
    hours: Math.floor((remainingSeconds % DAY) / HOUR),
    minutes: Math.floor((remainingSeconds % HOUR) / MINUTE),
    seconds: remainingSeconds % MINUTE,
    isValid: true,
    isPast: false,
  };
}

export function useTripCountdown(targetDate) {
  const [timeRemaining, setTimeRemaining] = useState(() =>
    calculateTimeRemaining(targetDate),
  );

  useEffect(() => {
    const update = () => setTimeRemaining(calculateTimeRemaining(targetDate));

    update();
    const intervalId = window.setInterval(update, SECOND);

    return () => window.clearInterval(intervalId);
  }, [targetDate]);

  return timeRemaining;
}

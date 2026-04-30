import { useState, useEffect } from "react";

export function useCountdown(initialMinutes: number = 15) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    // If the timer reaches 0, we can either stop or reset. For landing page urgency, often it just stops or loops. We'll stop at 0.
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((t) => Math.max(0, t - 1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return { 
    minutes: String(minutes).padStart(2, "0"), 
    seconds: String(seconds).padStart(2, "0"),
    isExpired: timeLeft <= 0
  };
}

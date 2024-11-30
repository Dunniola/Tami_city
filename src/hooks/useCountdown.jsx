import React from "react";
import { useState, useEffect } from "react";

export const useCountdown = () => {
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    if (secondsLeft <= 0) {
      return;
    }
    const timeout = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [secondsLeft]);

  function start(seconds) {
    setSecondsLeft(seconds);
  }
  return { secondsLeft, start };
};

export default useCountdown;

import React, { useState, useEffect } from "react";

const CountDown = ({ hours = 0, minutes = 0, seconds = 0, showHours }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = {
        hours: timeLeft.hours,
        minutes: timeLeft.minutes,
        seconds: timeLeft.seconds - 1,
      };

      if (newTimeLeft.seconds === -1) {
        newTimeLeft.seconds = 59;
        newTimeLeft.minutes -= 1;
      }

      if (newTimeLeft.minutes === -1) {
        newTimeLeft.minutes = 59;
        newTimeLeft.hours -= 1;
      }

      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <>
      <h2>
        {showHours && `${formatTime(timeLeft.hours)}:`}
        {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
      </h2>
    </>
  );
};

export default CountDown;

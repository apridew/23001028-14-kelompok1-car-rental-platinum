import "./style.css";
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
      <div className="countdown d-flex fs-5 gap-2">
        <h6 className={showHours && "alert bg-danger text-white fs-5 p-2"}>
          {showHours && `${formatTime(timeLeft.hours)}`}
        </h6>
        {showHours && ":"}
        <h6 className="alert bg-danger text-white fs-5 p-2">
          {formatTime(timeLeft.minutes)}
        </h6>
        :
        <h6 className="alert bg-danger text-white fs-5 p-2">
          {formatTime(timeLeft.seconds)}
        </h6>
      </div>
    </>
  );
};

export default CountDown;

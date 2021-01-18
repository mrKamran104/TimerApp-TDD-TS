import React, { useState, useRef } from "react";
import "./TimerStyle.css";
import TimerButton from "./TimerButton";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  let increment: any = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 10);
  };

  const handlePause = () => {
    clearInterval(increment.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 10);
  };

  const handleReset = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formatTime = () => {
    const getMiliSeconds: string = `0${timer}`.slice(-2);
    const seconds: number = Math.floor(timer / 100);
    const getSeconds: string = `0${seconds % 60}`.slice(-2);
    const minutes: number = Math.floor(timer / 60000);
    const getMinutes: string = `0${minutes % 60}`.slice(-2);
    const getHours: string = `0${Math.floor(timer / 3600000)}`.slice(-2);
    // console.log(timer);
    return `${getHours} : ${getMinutes} : ${getSeconds} : ${getMiliSeconds}`;
  };

  return (
    <div className="app">
      <div className="stopwatch-card">
        <div className="timer">
          <svg width="240" height="240">
            <circle
              className="defaultCircle"
              cx="120"
              cy="120"
              r="100"
              stroke="#ff88fb"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
            />
            <text className="timetxt" x="50" y="125" fill="black">
              {formatTime()}
            </text>
          </svg>
        </div>
        <div className="buttons">
          {!isActive && !isPaused ? (
            <TimerButton buttonAction={handleStart} buttonValue={"Start"} />
          ) : isPaused ? (
            <TimerButton buttonAction={handlePause} buttonValue={"Pause"} />
          ) : (
            <TimerButton buttonAction={handleResume} buttonValue={"Resume"} />
          )}
          {isActive ? (
            <TimerButton buttonAction={handleReset} buttonValue={"Reset"} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Timer;

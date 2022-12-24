import React, { useState } from "react";
import { useTimer } from "react-use-precision-timer";
import "./PomodoroTimer.css";

const getDisplayTime = (num: number) => {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
};

const PomodoroTimer = () => {
  const workTime = 25;
  const shortBreakTime = 5;
  const longBreakTime = 25;
  const roundsBeforeLongBreak = 7;

  const [timeLeft, setTimeLeft] = useState(workTime * 60);
  const [roundsFinished, setRoundsFinished] = useState(0);

  const updateRounds = (roundJustFinished: number) => {
    if (roundJustFinished === roundsBeforeLongBreak + 1) {
      setRoundsFinished(0);
    } else {
      setRoundsFinished((roundsFinished) => roundsFinished + 1);
    }
  };

  const resetTime = (roundJustFinished: number) => {
    if (roundJustFinished === roundsBeforeLongBreak) {
      setTimeLeft(longBreakTime * 60);
    } else {
      setTimeLeft(
        roundJustFinished % 2 === 0 ? workTime * 60 : shortBreakTime * 60
      );
    }
  };

  const finishTimerCallback = () => {
    const roundJustFinished = roundsFinished + 1;
    updateRounds(roundJustFinished);
    timer.stop();
    resetTime(roundJustFinished);
  };

  const timerCallback = () => {
    if (timer.isRunning()) {
      if (timeLeft === 0) {
        finishTimerCallback();
      } else {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }
    }
  };
  const timer = useTimer({ delay: 1000 }, timerCallback);

  const startOrPause = () => {
    if (timer.isRunning()) {
      timer.pause();
    } else {
      timer.start();
    }
  };

  const skip = () => {
    finishTimerCallback();
  };

  const min = Math.floor(timeLeft / 60);
  const sec = timeLeft % 60;

  const getRoundMarker = (
    round: number,
    display: string,
    hasLongHolder: boolean
  ) => {
    const isCurrent = round === roundsFinished + 1;
    return (
      <div className={"round-marker"}>
        <div
          className={
            "round-marker-holder" + (hasLongHolder ? " long-holder" : "")
          }
        />
        <div
          className={"round-marker-circle" + (isCurrent ? " current" : "")}
          key={round}
        >
          {display}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div id="timer">
        <p id="timer-text">
          {roundsFinished % 2 === 0 ? "Work hard!" : "Relax :)"}
        </p>
        <p id="time">
          {getDisplayTime(min)}:{getDisplayTime(sec)}{" "}
        </p>
        <div>
          <button className="timer-button uppercase" onClick={startOrPause}>
            {timer.isRunning() ? "Pause" : "Start"}
          </button>
          <button className="timer-button uppercase" onClick={skip}>
            Skip
          </button>
        </div>
      </div>
      <div className="round-marker-row">
        {[...Array(roundsBeforeLongBreak + 1).keys()].map((i) => {
          const round = i + 1;
          const isLong = i % 2 === 0;
          let display = "";
          if (i === roundsBeforeLongBreak) {
            display = longBreakTime.toString();
          } else if (round <= roundsFinished) {
            display = "✔";
          } else if (isLong) {
            display = workTime.toString();
          } else {
            display = shortBreakTime.toString();
          }
          return getRoundMarker(round, display, isLong);
        })}
      </div>
    </div>
  );
};

export default PomodoroTimer;

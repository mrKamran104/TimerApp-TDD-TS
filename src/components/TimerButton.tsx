import React from "react";
import "./TimerButton.css";
import { timerBtnPropTypes } from "../types/TimerTypes";

const TimerButton: React.FC<timerBtnPropTypes> = ({
  buttonAction,
  buttonValue,
}) => {
  return (
    <div>
      <button onClick={buttonAction}>{buttonValue}</button>
    </div>
  );
};

export default TimerButton;

import { AppContext } from "context/AppProvider";
import { useContext, useState } from "react";

const SettingBoardLogic = () => {
  const { pomodoro, pomodoroDispatch, style, styleDispatch } = useContext(AppContext);
  const [totalTime, setTotalTime] = useState(pomodoro.states);
  const [currentFont, setCurrentFont] = useState(style.currentFont);
  const [currentColor, setCurrentColor] = useState(style.currentColor);

  const hideSettingBoard = () => {
    pomodoroDispatch({
      type: "SET_SHOW_SETTING",
      value: false
    });
  };

  const hideSettingBoardOutside = (e) => {
    if (e.target === e.currentTarget) {
      hideSettingBoard();
    }
  };

  const changeTime = (key, val) => {
    setTotalTime({
      ...totalTime,
      [key]: {
        ...totalTime[key],
        totalMins: val
      }
    });
  };

  const changeFont = (val) => {
    setCurrentFont(val);
  };

  const changeColor = (val) => {
    setCurrentColor(val);
  }

  const updateTotalTime = () => {
    pomodoroDispatch({
      type: 'SET_TIME',
      value: totalTime
    });
    styleDispatch({
      type: 'SET_FONT',
      value: currentFont
    });
    styleDispatch({
      type: 'SET_COLOR',
      value: currentColor
    });
    hideSettingBoard();
  };

  return {
    hideSettingBoard,
    hideSettingBoardOutside,
    totalTime,
    setTotalTime,
    changeTime,
    currentFont,
    changeFont,
    currentColor,
    changeColor,
    updateTotalTime
  };
}

export default SettingBoardLogic;
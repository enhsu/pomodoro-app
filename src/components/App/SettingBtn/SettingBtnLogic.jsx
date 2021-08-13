import { useContext } from "react";
import { AppContext } from "context/AppProvider";

const SettingBtnLogic = () => {
  const { pomodoroDispatch } = useContext(AppContext);

  const showSettingBoard = () => {
    pomodoroDispatch({
      type: "SET_SHOW_SETTING",
      value: true
    });
  };

  return {
    showSettingBoard
  }
}

export default SettingBtnLogic;
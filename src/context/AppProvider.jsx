import { createContext, useReducer } from "react";
import styleReducer, { styleInitState } from "./reducer/styleReducer";
import pomodoroReducer, { pomodoroInitState } from "./reducer/pomodoroReducer";
export const AppContext = createContext();

const AppProvider = (props) => {
  const [styleState, styleDispatch] = useReducer(styleReducer, styleInitState);
  const [pomodoroState, pomodoroDispatch] = useReducer(pomodoroReducer, pomodoroInitState);
  return (
    <AppContext.Provider
      value={{
        style: styleState,
        styleDispatch,
        pomodoro: pomodoroState,
        pomodoroDispatch
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
};

export default AppProvider;
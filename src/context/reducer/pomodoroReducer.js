const pomodoro = {
  id: 'pomodoro',
  label: 'pomodoro',
  totalMins: 25
};

const shortBreak = {
  id: 'shortBreak',
  label: 'short break',
  totalMins: 3
};

const longBreak = {
  id: 'longBreak',
  label: 'long break',
  totalMins: 15
};

export const pomodoroInitState = {
  showSetting: false,
  currentState: 'pomodoro',
  states: {
    pomodoro,
    shortBreak,
    longBreak
  }
};

export default function pomodoroReducer(state, action) {
  switch(action.type) {
    case "SET_SHOW_SETTING":
      return {
        ...state,
        showSetting: action.value
      };
    case "SET_STATE":
      return {
        ...state,
        currentState: action.value
      };
    case "SET_TIME":
      return {
        ...state,
        states: action.value
      }
    default:
      return state;
  }
}
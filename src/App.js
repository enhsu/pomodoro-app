import { useContext } from "react";
import { AppContext } from "context/AppProvider";
import PomodoroApp from 'pages/PomodoroApp';

function App() {
  const { style } = useContext(AppContext);

  return (
    <PomodoroApp
      style={style}
    />
  );
}

export default App;

import { useContext } from 'react';
import { AppContext } from 'context/AppProvider';
import PomodoroStatesControl from 'components/App/PomodoroStatesControl'
import styled from "styled-components";
import Timer from "components/App/Timer";
import SettingBtn from "components/App/SettingBtn";
import SettingBoard from "components/App/SettingBoard";

const PomodoroApp = ({ className }) => {
  const { style, pomodoro } = useContext(AppContext);
  return (
    <div className={className}>
      <h1>pomodoro</h1>
      <PomodoroStatesControl style={style} />
      <Timer style={style} />
      <SettingBtn />
      { pomodoro &&
        pomodoro.showSetting ? <SettingBoard style={style} /> : null }
    </div>
  );
}

const styledPomodoroApp = styled(PomodoroApp)`
  max-width: 450px;
  width: 100%;
  min-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0 4rem;
  box-sizing: border-box;
  margin: 2rem;
  box-sizing: border-box;
  @media(min-width: 768px) {
    max-width: 450px;
    max-height: 900px;
  }
  h1 {
    color: ${({style}) => style ? style.global.color : ''};
    font-family: ${({style}) => style ? style.fonts[style.currentFont].value : ''};
    font-size: 2rem;
    text-align: center;
  }
`;

export default styledPomodoroApp;
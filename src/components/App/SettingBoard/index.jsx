import styled from "styled-components";
import SettingFont from "./SettingFont";
import SettingTime from "./SettingTime";
import SettingColor from "./SettingColor";
import SettingBoardLogic from "./SettingBoardLogic";

const SettingBoard = ({className, style}) => {
  const {
    hideSettingBoard,
    hideSettingBoardOutside,
    totalTime,
    changeTime,
    currentFont,
    changeFont,
    currentColor,
    changeColor,
    updateTotalTime
  } = SettingBoardLogic();
  return (
    <div className={className} onClick={hideSettingBoardOutside}>
      <div className="board-container">
        <div className="board-head">
          <h2>Settings</h2>
          <button onClick={hideSettingBoard}>×</button>
        </div>
        <div className="board-content">
          <SettingTime
            style={style}
            totalTime={totalTime}
            changeTime={changeTime}
          />
          <SettingFont
            style={style}
            currentFont={currentFont}
            changeFont={changeFont}
          />
          <SettingColor
            style={style}
            currentColor={currentColor}
            changeColor={changeColor}
          />
        </div>
        <button className="apply" onClick={updateTotalTime}>Apply</button>
      </div>
    </div>
  );
}

const styledSettingBoard = styled(SettingBoard)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99;
  .board-container {
    width: 95%;
    max-width: 450px;
    min-width: 350px;
    margin: 3rem;
    background: white;
    position: relative;
    text-align: center;
    border-radius: 2rem;
    padding-bottom: 3rem;
    @media(min-width: 768px) {
      max-width: 550px;
    }
    * {
      box-sizing: border-box;
    }
    .board-head {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 2rem;
      border-bottom: 1px solid ${props => props.style ? props.style.global['border-devide'] : ''};
      * {
        width: max-content;
      }
      & h2 {
        font-size: 1.75rem;
        font-family: "Kumbh Sans", sans-serif;
        color: ${props => props.style ? props.style.global['background-timer'] : ''};
      }
      & button {
        border: none;
        background: transparent;
        color: ${props => props.style ? props.style.global['background-timer'] : ''};
        font-size: 1.75rem;
        font-family: Arial;
        opacity: 0.5;
        cursor: pointer;
        transition: transform .15s ease-in-out;
        :hover {
          transform: scale(1.65);
        }
      }
    }

    .board-content {
      padding: 0 2rem;
      h3 {
        letter-spacing: 0.25rem;
        font-size: 0.875rem;
        font-weight: 700;
      }
    }

    .apply {
      cursor: pointer;
      position: absolute;
      bottom: 0;
      transform: translate(-50%, 50%);
      border: none;
      border-radius: 2rem;
      font-size: 1rem;
      width: 140px;
      padding: 1rem;
      color: ${props => props.style ? props.style.global.color : ''};
      background: #f87070;
    }
  }
`;

export default styledSettingBoard;
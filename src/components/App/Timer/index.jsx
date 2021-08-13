import TimerLogic from './TimerLogic';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import SoundIcon from './SoundIcon';

const Timer = ({ className, style }) => {
  const { timePercentage, timeString, toggleActive, stateText, isSoundOn, toggleIsSoundOn} = TimerLogic();

  return (
    <div
      className={className}
      onClick={() => toggleActive()}>
      <div className="circle-background">
        <CircularProgressbarWithChildren
          value={timePercentage}
          text={timeString}
          strokeWidth={4}
          styles={buildStyles({
            textColor: `${style ? style.global.color : ''}`,
            pathColor: `${style ? style.colors[style.currentColor].value : ''}`,
            trailColor: 'none'
          })}
        >
          <button onClick={toggleIsSoundOn} className="sound-btn">
            <SoundIcon
              style={style}
              isSoundOn={isSoundOn}
            />
          </button>
          <p className="state-text">{ stateText }</p>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

const styledTimer = styled(Timer)`
  position: relative;
  cursor: pointer;
  width: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(315deg,#2e325a,#0e112a);
  box-shadow: -3.5rem -3.5rem 7rem #272c5a, 3.5rem 3.5rem 7rem #121530;
  &::before{
    content: '';
    float: left;
    padding-top: 100%;
  }
  .circle-background {
    width: 87%;
    height: 87%;
    padding: 0.6rem;
    border-radius: 100%;
    background: ${props => props.style ? props.style.global['background-timer'] : ''};
    .sound-btn {
      border: none;
      background: transparent;
      cursor: pointer;
    }
    .state-text {
      margin-top: 45%;
      color: ${props => props.style ? props.style.global.color : ''};
      font-weight: 700;
      letter-spacing: 1rem;
      margin-left: 1rem;
      text-align: center;
    }
  }
`;

export default styledTimer;
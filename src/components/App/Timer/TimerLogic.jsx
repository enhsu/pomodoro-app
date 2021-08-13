import { useContext, useState, useEffect } from "react";
import { AppContext } from "context/AppProvider";
import formatTimeString from "utils/formatTimeString";
import alarm from 'assets/alarm.mp3';
import clickSound from 'assets/clickSound.mp3';
import soundOnEffect from 'assets/soundOnEffect.mp3';
import soundOffEffect from 'assets/soundOffEffect.mp3';
import { resetSound, playSound } from 'utils/handleSound';

const Alarm = new Audio(alarm);
const ClickSound = new Audio(clickSound);
const SoundOnEffect = new Audio(soundOnEffect);
const SoundOffEffect = new Audio(soundOffEffect);

const playSoundToggleEffect = (isSoundOn) => {
  if (!isSoundOn) {
    resetSound(SoundOffEffect);
    return playSound(SoundOnEffect);
  }
  resetSound(SoundOnEffect);
  return playSound(SoundOffEffect);
}

const TimerLogic = () => {
  const { pomodoro } = useContext(AppContext);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState((pomodoro.states[pomodoro.currentState].totalMins * 60));
  const [stateText, setStateText] = useState('START');
  const [isSoundOn, setIsSoundOn] = useState(true);

  const toggleActive = () => {
    playSound(ClickSound);
    if (time <= 0) {
      initState();
    } else {
      setIsActive(state => !state);
    }
  }

  const toggleIsSoundOn = (e) => {
    e.stopPropagation();
    playSoundToggleEffect(isSoundOn);
    setIsSoundOn(!isSoundOn);
  }

  const getTimePercentage = () => {
    return (time/(pomodoro.states[pomodoro.currentState].totalMins * 60)) * 100;
  }

  function initState() {
    setTime(pomodoro.states[pomodoro.currentState].totalMins * 60);
    setIsActive(false);
    setStateText('START');
    resetSound(Alarm);
  };

  // update state: time, font, color, currentState
  useEffect(() => {
    initState();
    // eslint-disable-next-line
  }, [pomodoro.currentState, pomodoro.states]);

  // update time: timer countdown
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setTime(t => t - 1);
      }, 1000);
      if (time <= 0) {
        clearInterval(interval);
        setIsActive(false);
      }
      return () => {
        clearInterval(interval);
      }
    }
    // eslint-disable-next-line
  }, [isActive, time])

  // update time: timer state text
  useEffect(() => {
    if (isActive) {
      setStateText('PAUSE');
    } else {
      if (time <= 0) {
        setStateText('TIME UP');
      } else {
        if (getTimePercentage() !== 100) {
          setStateText('RESUME');
        } else {
          setStateText('START');
        }
      }
    }
    // eslint-disable-next-line 
  }, [isActive, time]);

  // update time: sound effect
  useEffect(() => {
    if (
      isSoundOn
      && !isActive
      && getTimePercentage() === 0
    ) {
      playSound(Alarm);
    }
    // eslint-disable-next-line 
  }, [isActive, time])

  return {
    timePercentage: getTimePercentage(),
    timeString: formatTimeString(time),
    toggleActive,
    stateText,
    isSoundOn,
    toggleIsSoundOn
  }
}

export default TimerLogic;
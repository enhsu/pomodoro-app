import { useContext } from 'react';
import { AppContext } from 'context/AppProvider';
import MultiStatesTemplate from 'components/multiStatesTemplate';
import styled from 'styled-components';

const PomodoroStatesControl = ({ className }) => {
  const { pomodoro, pomodoroDispatch } = useContext(AppContext);
  return (
    <MultiStatesTemplate
      className={className}
      name='pomodoroStates'
      currentState={pomodoro.currentState}
      states={pomodoro.states}
      onChange={(id) => pomodoroDispatch({
        type: 'SET_STATE',
        value: id
      })}
    />
  );
}

const styledPomodoroStateControl = styled(PomodoroStatesControl)`
  background: ${props => props.style ? props.style.global['background-timer']: ''};
  padding: 0.5rem;
  gap: 1.5rem;
  border-radius: 3rem;
  z-index: 99;
  & label {
    color: ${props => props.style ? props.style.global.color: ''};
    font-size: 0.875rem;
    font-family: ${props => props.style ? props.style.fonts[props.style.currentFont].value : ''};
    padding: 1rem;
    opacity: 0.4;
    text-align: center;
  }
  & input:checked + label {
    color: ${props => props.style ? props.style.global['color-dark'] : ''};
    background: ${props => props.style ? props.style.colors[props.style.currentColor].value : ''};
    border-radius: 3rem;
    opacity: 1
  }
`

export default styledPomodoroStateControl;
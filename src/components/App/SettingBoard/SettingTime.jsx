// import { AppContext } from "context/AppProvider";
// import { useContext } from "react";
import { Fragment } from "react";
import styled from "styled-components";

const SettingTime = ({ className, totalTime, changeTime }) => 
{
  // const { pomodoro } = useContext(AppContext);
  return (
    <div className={className}>
      <h3>TIME (MINUTES)</h3>
      <form className="number-states">
        {
          totalTime &&
          Object.keys(totalTime).map(stateKey => {
            const state = totalTime[stateKey];
            return (
              <Fragment key={state.id}>
                <label>{state.label}</label>
                <input min='1' type="number" value={state.totalMins} onChange={(e) => changeTime(stateKey, e.target.value)}></input>
              </Fragment>
            )
          })
        }
      </form>
    </div>
  );
}

const styledSettingTime = styled(SettingTime)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${props => props.style ? props.style.global['border-devide'] : ''};
  text-align: center;
  @media(min-width: 768px) {
    text-align: left;
  }
  h3 {
    font-family: ${props => props.style ? props.style.fonts[props.style.currentFont].value : ''};
  }
  .number-states {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 0.5rem;
    align-items: center;
    @media(min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-column-gap: 1.5rem;
    }
    label {
      grid-column: 1;
      font-family: ${props => props.style ? props.style.fonts[props.style.currentFont].value : ''};
      font-size: 0.75rem;
      opacity: 0.4;
      text-align: left;
      @media(min-width: 768px) {
        grid-row: 1;
        grid-column: auto;
      }
    }
    input {
      grid-column: 2;
      height: 2.5rem;
      font-size: 0.75rem;
      padding-left: 1rem;
      background: ${props => props.style ? props.style.global['input-background'] : ''};
      border: none;
      border-radius: 0.5rem;
      @media(min-width: 768px) {
        grid-row: 2;
        grid-column: auto;
      }
    }
  }
`;

export default styledSettingTime;
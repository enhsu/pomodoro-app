import { Fragment } from "react";
import styled from "styled-components";

const multiStatesTemplate = ({ className, name, currentState, states, onChange}) => {
  return (
    <form className={className}>
      { states &&
        Object.keys(states).map(state => {
          const { id, label, labelStyle} = states[state];
          return (
            <Fragment key={id}>
              <input
                id={id}
                name={ name }
                type='radio'
                checked={id === currentState}
                onChange={() => onChange(id || state)}
              />
              <label
                htmlFor={id}
                style={labelStyle}>
                { label }
              </label>
            </Fragment>
          )
        })
      }
    </form>
  );
}

const styledMultiStatesTemplate = styled(multiStatesTemplate)`
  display: flex;
  justify-content: space-between;
  width: max-content;
  height: max-content;
  & label, input {
    cursor: pointer;
  }
  & input[type=radio] {
    display: none;
  }
`

export default styledMultiStatesTemplate;
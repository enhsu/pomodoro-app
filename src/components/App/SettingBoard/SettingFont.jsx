import MultiStatesTemplate from "components/multiStatesTemplate";
// import { AppContext } from "context/AppProvider";
// import { useContext } from "react";
import styled from "styled-components";

const SettingFont = ({ className, style, currentFont, changeFont }) => {
  // const { styleDispatch } = useContext(AppContext);
  return (
    <div className={className}>
      <h3>FONT</h3>
      <MultiStatesTemplate
        className="font-states"
        name="fontStates"
        currentState={currentFont}
        states={style.fonts}
        onChange={(id) => changeFont(id)}
      />
    </div>
  );
}

const styledSettingFont = styled(SettingFont)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${props => props.style ? props.style.global['border-devide'] : ''};
  @media(min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
  h3 {
    flex-grow: 99;
    text-align: left;
    font-family: ${props => props.style ? props.style.fonts[props.style.currentFont].value : ''}
  }
  .font-states {
    gap: 0.75rem;
    & label {
      padding: 0.75rem;
      border-radius: 100%;
      color: ${props => props.style ? props.style.global['color-dark'] : ''};
    }
    & input:checked + label {
      color: ${props => props.style ? props.style.global.color : ''};
      background: ${props => props.style ? props.style.global['background-timer'] : ''};
    }
  }
`;

export default styledSettingFont;
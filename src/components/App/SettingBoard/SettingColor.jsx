import MultiStatesTemplate from "components/multiStatesTemplate";
import styled from "styled-components";
import checkSVG from 'assets/check.svg';

const SettingColor = ({ className, style, currentColor, changeColor }) => {
  return (
    <div className={className}>
      <h3>COLOR</h3>
      <MultiStatesTemplate
        className="color-states"
        name="colorStates"
        currentState={currentColor}
        states={style.colors}
        onChange={id => changeColor(id)}
      />
    </div>
  );
}

const styledSettingColor = styled(SettingColor)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-conten: space-between;
  align-items: center;
  padding: 1.5rem 0;
  @media(min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
  & h3 {
    flex-grow: 99;
    text-align: left;
    letter-spacing: 0.25rem;
    font-size: 0.875rem;
    font-weight: 700;
    font-family: ${props => props.style ? props.style.fonts[props.style.currentFont].value : ''}
  }
  .color-states {
    gap: 0.75rem;
    & label {
      width: 2.75rem;
      height: 2.75rem;
      border-radius: 100%;
      color: ${props => props.style ? props.style.global['color-dark'] : ''};
    }
    & input:checked + label {
      color: ${props => props.style ? props.style.global.color : ''};
      background-image: url(${checkSVG});
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;

export default styledSettingColor;
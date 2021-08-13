import {ReactComponent as GearSVG} from 'assets/gear.svg';
import styled from 'styled-components';
import SettingBtnLogic from './SettingBtnLogic';

const SettingBtn = ({ className }) => {
  const { showSettingBoard } = SettingBtnLogic();
  return (
    <button onClick={showSettingBoard} className={className}>
      <GearSVG />
    </button>
  );
}

const styledSettingBtn = styled(SettingBtn)`
  border: none;
  background-color: Transparent;
  cursor: pointer;
  width: max-content;
  svg {
    transition: transform .15s ease-in-out;
  }
  svg:hover {
    transform: rotate(0.1turn) scale(1.65);
  }
`;

export default styledSettingBtn;
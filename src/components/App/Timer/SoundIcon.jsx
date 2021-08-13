import { ReactComponent as SoundOn } from 'assets/soundOn.svg';
import { ReactComponent as SoundOff } from 'assets/soundOff.svg';
import { Fragment } from 'react';
import styled from 'styled-components';

const SoundIcon = ({ isSoundOn, className }) => {
  return (
    <Fragment>
      { isSoundOn ? <SoundOn className={className} /> : <SoundOff className={className} />}
    </Fragment>
  )
};

const styledSoundIcon = styled(SoundIcon)`
  width: 2rem;
  height: 2rem;
  color: ${props => props.style ? props.style.global.color : ''};
  opacity: ${props => props.isSoundOn ? 1 : 0.4};
  :action {
    color: red;
  }
`

export default styledSoundIcon;
import React from 'react'

import { ButtonBack, ButtonFront } from './index'

const Button = (props) => (
  <ButtonBack>{props.children}
    <ButtonFront alt={props.alt} onClick={props.onClick} >{props.children}</ButtonFront>
  </ButtonBack>
);

export default Button

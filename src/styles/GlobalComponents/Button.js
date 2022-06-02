import React from 'react'

import { ButtonBack, ButtonFront } from './index'

const Button = (props) => (
  <ButtonBack>
    <ButtonFront alt={props.alt} onClick={props.onClick} href={props.href} >{props.children}</ButtonFront>
  </ButtonBack>
);

export default Button

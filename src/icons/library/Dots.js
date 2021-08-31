import React from 'react'

import Svg from '../../../helpers/Svg'

const Dots = props => (
  <Svg viewBox="0 0 10 10" {...props}>
    <path d="M0,0H2V2H0ZM0,10H2V8H0ZM0,6H2V4H0Z" />
  </Svg>
)

export default Dots

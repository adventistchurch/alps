import React from 'react'

import Svg from '../../../helpers/Svg'
import {IconProps} from "./IconProps";

const Dots = ({fill}: IconProps): JSX.Element => (
    <Svg viewBox={"0 0 10 10"} fill={fill}>
        <path d="M0,0H2V2H0ZM0,10H2V8H0ZM0,6H2V4H0Z"/>
    </Svg>
)

export default Dots

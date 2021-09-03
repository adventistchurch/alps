import React from 'react'

import Svg from '../../helpers/Svg'
import {IconProps} from "./IconProps";

const Contact = ({fill}: IconProps): JSX.Element => (
    <Svg viewBox={"0 0 10 10"} fill={fill}>
        <path d="M0,0V8H6l4,2V0ZM8,6.76,6.47,6H2V2H8Z"/>
    </Svg>
)

export default Contact

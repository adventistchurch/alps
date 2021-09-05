import React from 'react'

import Svg from '../../../helpers/Svg'
import {IconProps} from "./IconProps";

const Legal = ({fill, className}: IconProps): JSX.Element => (
    <Svg viewBox={"0 0 10 10"} fill={fill} className={className}>
        <path d="M10,2.31H0V0H10ZM6.36,3.85H0v2.3H6.36ZM8.22,7.7H0V10H8.22Z"/>
    </Svg>
)

export default Legal

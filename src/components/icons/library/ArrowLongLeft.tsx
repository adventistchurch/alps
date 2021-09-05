import React from 'react'

import Svg from '../../../helpers/Svg'
import {IconProps} from "./IconProps";

const ArrowLongLeft = ({fill, className}: IconProps): JSX.Element => (
    <Svg viewBox={"0 0 20 20"} fill={fill} className={className}>
        <path d="M5 5l1.5 1.5L4 9h15.7v2H4l2.5 2.5L5 15 .3 10z"/>
    </Svg>
)

export default ArrowLongLeft

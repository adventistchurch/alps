import React from 'react'

import Svg from '../../../helpers/Svg'
import {IconProps} from "./IconProps";

const ArrowShortLeft = ({fill, className}: IconProps): JSX.Element => (
    <Svg viewBox="0 0 20 20" fill={fill} className={className}>
        <path d="M10 20l2.7-3-5.2-5H20V8H7.5l5.2-5L10 0 0 10z"/>
    </Svg>
)

export default ArrowShortLeft

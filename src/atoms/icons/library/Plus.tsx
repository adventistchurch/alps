import React from 'react'

import Svg from '../../../helpers/Svg'
import {IconProps} from "./IconProps";

const Plus = ({fill, className}: IconProps): JSX.Element => (
    <Svg viewBox={"0 0 10 10"} fill={fill} className={className}>
        <path d="M10,4H6V0H4V4H0V6H4v4H6V6h4Z"/>
    </Svg>
)

export default Plus

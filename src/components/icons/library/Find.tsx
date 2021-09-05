import React from 'react'

import Svg from '../../../helpers/Svg'
import {IconProps} from "./IconProps";

const Find = ({fill, className}: IconProps): JSX.Element => (
    <Svg viewBox={"0 0 10 10"} fill={fill} className={className}>
        <path d="M0,4,2,8l4,2L10,0ZM5,7.24,3.49,6.51,2.76,5.05,6.41,3.59Z"/>
    </Svg>
)

export default Find

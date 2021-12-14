import React from 'react'

import Svg from '../../../helpers/Svg';
import {IconProps} from "./IconProps";

const ArrowBracketLeft = ({fill, className}: IconProps): JSX.Element => (
    <Svg viewBox={"0 0 20 20"} fill={fill} className={className}>
        <path d="M13.5 20l3-3-7-7 7-7-3-3-10 10z"/>
    </Svg>
)

export default ArrowBracketLeft;


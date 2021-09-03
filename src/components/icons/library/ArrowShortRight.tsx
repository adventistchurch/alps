import React from 'react'

import Svg from '../../../helpers/Svg'
import {IconProps} from "./IconProps";

const ArrowShortRight = ({fill}: IconProps): JSX.Element => (
    <Svg viewBox={"0 0 20 20"} fill={fill}>
        <path d="M10 20l-2.7-3 5.2-5H0V8h12.5L7.3 3 10 0l10 10z"/>
    </Svg>
)

export default ArrowShortRight

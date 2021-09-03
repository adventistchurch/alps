import React from 'react'

import Svg from '../../../helpers/Svg'
import {IconProps} from "./IconProps";

const ArrowLongRight = ({fill}: IconProps): JSX.Element => (
    <Svg viewBox={"0 0 20 20"} fill={fill}>
        <path d="M15 5l-1.5 1.5L16 9H.3v2H16l-2.5 2.5L15 15l4.7-5z"/>
    </Svg>
)

export default ArrowLongRight

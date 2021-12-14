import React, { useEffect, useState } from 'react';

export const sizes = {
    hairline: '1pt',
    small: '3pt',
    medium: '5pt',
    large: '10pt',
    huge: '16pt',
};

const widthTransition = 'width .5s ease-out';
const heightTransition = 'height .3s ease-out';

export const sizeMap = {
    'hairline':'hairline',
    'small':'small',
    'medium':'medium',
    'large':'large',
    'huge':'huge'
}

export interface ProgressProps {
    /**
     * Specify whether the Progress should be a fixed variant
     */
    fixed?: boolean,
    /**
     * Specify the percentage of your Progress
     */
    percentage?: number,
    /**
     * Specify the size of your Progress
     */
    size?: keyof typeof sizeMap,
    style?: [],
    /**
     * Specify whether the Progress should be a visible variant
     */
    visible?: boolean
}

export const Progress = ({fixed, percentage, size = "medium", style, visible = true}: ProgressProps): JSX.Element => {
    const barStyle = useBarStyle(visible, size, fixed, style)
    const progressStyle = useProgressStyle(percentage, visible, size)

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <div className="u-theme--background-color--lighter" style={barStyle}>
            {/*/
            / eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore*/}
            <div className="u-theme--background-color--dark" style={progressStyle} />
        </div>
    )
}

const useBarStyle = (
    visible: boolean,
    size: keyof typeof sizeMap,
    fixed = false,
    style = {},
    transition = heightTransition
) => {
    const fixedProps = fixed
        ? { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999999 }
        : {}

    return {
        ...fixedProps,
        height: visible ? sizes[size] : 0,
        transition: transition,
        ...style,
    }
}

const useProgressStyle = (percentage: number | undefined, visible: boolean, size: keyof typeof sizeMap) => {
    const [fakePercentage, setFakePercentage] = useState(0)
    const barStyle = useBarStyle(
        visible,
        size,
        false,
        {},
        `${widthTransition}, ${heightTransition}`
    )

    const isPercentageSet =
        percentage !== null && percentage !== undefined;

    useEffect(() => {
        let interval: any;
        if (isPercentageSet) {
            setFakePercentage(0)
            clearInterval(interval)
        } else {
            interval = setInterval(() => {
                if (fakePercentage < 100) {
                    setFakePercentage(fakePercentage + 20)
                } else {
                    clearInterval(interval)
                }
            }, 500)
        }
        return () => clearInterval(interval)
    }, [fakePercentage, isPercentageSet])

    return {
        width: `${
            isPercentageSet ? (percentage > 100 ? 100 : percentage) : fakePercentage
        }%`,
        ...barStyle,
    }
}
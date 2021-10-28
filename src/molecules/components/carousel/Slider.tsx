import React from "react";
import {SliderArrow} from "./SliderArrow";
import useClasses from "../../../helpers/useClasses";
import useSlider from "../../../helpers/useSlider";

export const DefaultArrows = (onNext?: () => void, onPrev?: () => void): JSX.Element => {
    return (
        <>
            <SliderArrow prev onClick={onPrev}/>
            <SliderArrow next onClick={onNext}/>
        </>
    )
}

export const DefaultDots = (dots: { active?: boolean, key?: number, label?: string, onClick?: () => void }[]): JSX.Element => {
    return (
        <ul className="slick-dots" role="tablist">
            {dots.map(({active, key, label, onClick}) => (
                <li
                    aria-hidden={!active}
                    role="presentation"
                    aria-selected={!active}
                    aria-controls={`navigation${label}`}
                    className={active ? "slick-active" : ""}
                    key={`slider-dot-${key}`}
                    onClick={onClick}
                >
                    <button
                        type="button"
                        data-role="none"
                        role="button"
                        aria-required="false"
                    >
                        {label}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export interface SliderProps {
    arrowsComponent?: any,
    children?: React.ReactNode,
    className?: string,
    dotsComponent?: any,
    settings?: any,
    showArrows?: boolean,
    showDots?: boolean,
}

export const Slider = ({
                           children,
                           arrowsComponent: Arrows = DefaultArrows,
                           dotsComponent: Dots = DefaultDots,
                           className,
                           settings,
                           showArrows,
                           showDots,
                           ...props
                       }: SliderProps): JSX.Element => {
    const {
        dots,
        initialized,
        listRef,
        onNext,
        onPrev,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onDotClick,
        sliderRef,
        slides,
        trackRef,
        touchEvents,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
    } = useSlider(children, {
        showArrows,
        showDots,
        ...settings,
    })

    const classNames = useClasses(`slick-slider ${className}`, {
        "slick-initialized": initialized.toString(),
    })

    return (
        <div className={classNames}  {...props}>
            <div
                className="slick-list"
                aria-live="polite"
                {...touchEvents}
            >
                <div className="slick-track" role="listbox">
                    {slides}
                </div>
            </div>
            {showArrows && Arrows && <Arrows onNext={onNext} onPrev={onPrev}/>}
            {showDots && <Dots dots={dots} onClick={onDotClick}/>}
        </div>
    )
}

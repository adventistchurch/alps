import React from "react";
import {IconWrap} from "../../../atoms/icons/IconWrap";
import {Slide, SlideProps} from "../slide/Slide";
import {Slider} from "./Slider";

const sliderSettings = {
    fade: true,
    touchThreshold: 11,
    dots: true,
    adaptiveHeight: true,
}

export interface CarouselArrowsProps {
    onNext?: () => void,
    onPrev?: () => void,
}

export const CarouselArrows = ({onNext, onPrev}: CarouselArrowsProps): JSX.Element => {
    return (
        <div className="c-carousel__controls">
      <span className="o-arrow__prev" onClick={onPrev}>
        <IconWrap
            background={"darker"}
            className="c-carousel__arrow c-carousel__arrow--prev u-round"
            name="arrow-bracket-left"
            size="s"
        />
      </span>
            <span className="o-arrow__next" onClick={onNext}>
        <IconWrap
            background={"darker"}
            className="c-carousel__arrow c-carousel__arrow--next u-round"
            name="arrow-bracket-right"
            size="s"
        />
      </span>
        </div>
    )
}

export interface CarouselProps {
    slides?: SlideProps[],
    showArrows?: boolean,
    showDots?: boolean,
}

export const Carousel = ({slides = [], showArrows = false, showDots = true}: CarouselProps): JSX.Element => {
    return (
        <div className="c-carousel u-position--relative">
            <Slider
                arrowsComponent={showArrows ? CarouselArrows : null}
                className="c-carousel__slides"
                showArrows={showArrows}
                showDots={showDots}
                settings={sliderSettings}
            >
                {slides.map((slide, key) => (
                    <Slide {...slide} key={`carousel-slide-${key}`}/>
                ))}
            </Slider>
        </div>
    )
}

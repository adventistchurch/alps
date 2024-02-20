import React, { useCallback, useEffect, useState, useRef } from "react"

import {useInterval} from "./useInterval"
import useWindowEvent from "./useWindowEvent"
import {range} from "./range"

export const getSwipeDirection = (start = [], end = [], minSwipe = 0) => {
  const [x1, y1] = start
  const [x2, y2] = end

  const xDist = x1 - x2
  const yDist = y1 - y2

  if (isNaN(xDist) || isNaN(yDist) || Math.abs(xDist) < minSwipe) {
    return 0
  }

  const r = Math.atan2(yDist, xDist)
  let swipeAngle = Math.round((r * 180) / Math.PI)

  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle)
  }
  if (swipeAngle <= 45 && swipeAngle >= 0) {
    return 1
  }
  if (swipeAngle <= 360 && swipeAngle >= 315) {
    return 1
  }
  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return -1
  }

  return 0
}

// @ts-ignore
function getTouchPos(event) {
  const { touches, clientX, clientY } = event
  const { pageX: x = clientX, pageY: y = clientY } = touches ? touches[0] : {}

  return [x, y]
}

/**
 * Hook for Slider
 *
 * @param {Array} slides Array of elements
 * @param {Object} settings Slider configuration
 */
export default function useSlider(children = [], settings = {}) {
  // Get total slides
  const totalSlides = children.length

  // Get options from default and settings
  const {
    autoplay,
    autoplaySpeed,
    easing,
    fade,
    // infinite, // TODO: Implement this feature
    initialSlide,
    pauseOnHover,
    // @ts-ignore
    responsive,
    showArrows,
    showDots,
    slidesToScroll,
    slidesToShow,
    speed,
    touchMove,
    touchThreshold,
    zIndex,
  } = { ...defaults, ...settings }

  // Set some states
  const [dots, setDots] = useState([])
  const [touchStartPos, setTouchStartPos] = useState([])
  const [touchEndPos, setTouchEndPos] = useState([])
  const [index, setIndex] = useState(
    initialSlide < totalSlides ? initialSlide : 0
  )
  const [initialized, setInitialized] = useState(0)
  const [minSwipe, setMinSwipe] = useState(0)
  const [paused, setPaused] = useState(false)
  const [slides, setSlides] = useState(null)
  const [itemsToShow, setItemsToShow] = useState(slidesToShow)
  const [itemsToScroll, setItemsToScroll] = useState(slidesToScroll)
  const [slideWidth, setSlideWidth] = useState(0)

  // Set refs
  const sliderRef = useRef()
  const listRef = useRef()
  const trackRef = useRef()

  // Set CSS transition
  const transition = `${fade ? "opacity" : "transform"} ${speed}ms ${easing}`

  // Autoplay methods

  const onPause = useCallback(() => setPaused(true), [])

  const onPlay = useCallback(() => setPaused(false), [])

  // Nav methods

  const onPrev = useCallback(() => {
    const prevIndex =
      index - itemsToScroll < 0
        ? totalSlides -
          (itemsToScroll > 1 ? totalSlides % itemsToScroll : itemsToScroll)
        : index - itemsToScroll

    setIndex(prevIndex)
  }, [index, itemsToScroll, totalSlides])

  const onNext = useCallback(() => {
    const nextIndex =
      index + itemsToScroll >= totalSlides ? 0 : index + itemsToScroll

    setIndex(nextIndex)
  }, [index, itemsToScroll, totalSlides])

  // Drag/Swipe methods

  // @ts-ignore
  const onSwipeStart = useCallback(e => {
    // @ts-ignore
    setTouchStartPos(getTouchPos(e))
    setPaused(true)
  }, [])

  // @ts-ignore
  const onSwipeMove = useCallback(e => {
    // @ts-ignore
    setTouchEndPos(getTouchPos(e))
  }, [])

  const onSwipeEnd = useCallback(() => {
    const direction = getSwipeDirection(touchStartPos, touchEndPos, minSwipe)

    if (direction > 0) {
      onNext()
    } else if (direction < 0) {
      onPrev()
    }

    setTouchStartPos([])
    setTouchEndPos([])
    setPaused(false)
  }, [minSwipe, onNext, onPrev, touchEndPos, touchStartPos])

  // Set touch events
  const touchEvents = touchMove
    ? {
        onMouseDown: onSwipeStart,
        onMouseMove: onSwipeMove,
        onMouseUp: onSwipeEnd,
        onMouseLeave: onSwipeEnd,
        onTouchStart: onSwipeStart,
        onTouchMove: onSwipeMove,
        onTouchEnd: onSwipeEnd,
        onTouchCancel: onSwipeEnd,
      }
    : {}

  const onResize = useCallback(() => {
    const sliderElem = sliderRef.current
    const trackElem = trackRef.current
    const listElem = listRef.current

    // Calculate slider and list elements widths
    // @ts-ignore
    const listWidth = listElem.offsetWidth
    // @ts-ignore
    const sliderWidth = sliderElem.offsetWidth

    // Calculate and set min swipe based on list width and touch threashold
    if (!isNaN(touchThreshold) && touchThreshold > 0) {
      setMinSwipe(listWidth / touchThreshold)
    }

    let trackWidth = 0

    // FADE:
    if (fade) {
      setSlideWidth(sliderWidth)

      // Calculate track width for fade
      trackWidth = sliderWidth * totalSlides
    }
    // SLIDE:
    else {
      // Calculate mobile slide width
      let width = sliderWidth / slidesToShow

      if (responsive) {
        const breakpointKey = Object.keys(responsive)
          .reverse()
          .find(bp => parseInt(bp) < sliderWidth)

        // @ts-ignore
        const breakpoint = responsive[breakpointKey]

        // Get configuration from breakpoint, if exists
        if (breakpoint) {
          const { slidesToShow, slidesToScroll } = breakpoint

          // Recalculate Width for breackpoint
          width = sliderWidth / slidesToShow

          setItemsToShow(slidesToShow)
          setItemsToScroll(slidesToScroll)
        }
      }

      // Roundup width
      width = Math.floor(width)

      // Set slide width
      setSlideWidth(width)

      // Calculate track width for slide
      trackWidth = width * totalSlides
    }

    // Set track width
    // @ts-ignore
    trackElem.style.width = `${trackWidth}px`
  }, [fade, responsive, slidesToShow, totalSlides, touchThreshold])

  // Effects:

  // Call onReize on resize event
  useWindowEvent("resize", onResize, 0, true)

  // Autoplay
  // @ts-ignore
  useInterval(onNext, autoplay ? (paused ? null : autoplaySpeed) : null)

  // Set slides and dots when index or slideWidth changes
  useEffect(() => {
    // Set slide mouse events
    const slideEvents = pauseOnHover
      ? {
          onMouseEnter: onPause,
          onMouseLeave: onPlay,
        }
      : {}

    // @ts-ignore
    function cloneSlide(slide, { active, current, style }) {
      const { className, ...childProps } = slide.props

      // Set clases
      const classes = [className, "slick-slide"]
      if (active) classes.push("slick-active")
      if (current) classes.push("slick-current")

      const slideProps = {
        "aria-hidden": !active,
        className: classes.join(" "),
        role: "option",
        style,
        tabIndex: -1,
        ...slideEvents,
      }

      return React.cloneElement(slide, { ...slideProps, ...childProps })
    }

    const slides = React.Children.map(children, (slide, i) => {
      // calculate if is current
      const current = i === index

      let active
      let style

      if (fade) {
        // Only current is active
        active = current

        // - Fade Styles
        style = {
          left: i === 0 ? 0 : -(slideWidth * i),
          opacity: current ? 1 : 0.25,
          position: "relative",
          top: 0,
          transition: current ? transition : "none",
          zIndex: current ? zIndex + totalSlides + 10 : zIndex + i,
        }
      } else {
        // Is active if is within the window (index <-> index + itemsToShow)
        active = i >= index && index + itemsToShow > i

        // - Slide styles (default)
        let xPos = -slideWidth * index

        style = {
          transition: transition,
          transform: `translate3d(${xPos}px, 0, 0)`,
        }
      }

      return cloneSlide(slide, {
        active,
        current,
        style: { width: slideWidth, ...style },
      })
    })

    setSlides(slides)

    setDots(
        // @ts-ignore
      range(1, totalSlides).map((label, key) => ({
        active: key === index,
        key,
        label: `${label}`,
        onClick: () => setIndex(key),
      }))
    )

    // @ts-ignore
    if (!initialized) setInitialized(true)
  }, [
    children,
    fade,
    index,
    initialized,
    itemsToShow,
    onPause,
    onPlay,
    pauseOnHover,
    slideWidth,
    totalSlides,
    transition,
    zIndex,
  ])

  return {
    dots,
    initialized,
    listRef,
    onNext,
    onPrev,
    showArrows,
    showDots,
    sliderRef,
    slides,
    touchEvents,
    trackRef,
  }
}

const defaults = {
  autoplay: true,
  autoplaySpeed: 4000,
  easing: "ease-out",
  fade: false,
  infinite: true,
  initialSlide: 0,
  pauseOnHover: true,
  showArrows: true,
  showDots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  touchMove: true,
  touchThreshold: 11,
  zIndex: 1000,
}

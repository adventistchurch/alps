import React from 'react'

interface SvgProps {
    title?: string,
    viewBox?: string,
    fill?: string,
    className?: string,
    children: React.ReactNode
}

export default function Svg({ title, viewBox, fill, className, children }: SvgProps): JSX.Element {

  return (
      <svg
        xmlns={"http://www.w3.org/2000/svg"}
        xmlnsXlink={"http://www.w3.org/1999/xlink"}
        viewBox={viewBox}
        fill={fill}
        className={className}
      >
          {title && <title>{title}</title>}
          {children}
      </svg>
  )
}

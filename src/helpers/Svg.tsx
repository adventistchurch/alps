import React from 'react'

interface SvgProps {
    title?: string,
    viewBox?: string,
    fill?: string,
    pathFill?: string,
    themePathFill?: string,
    children: React.ReactNode
}

export default function Svg({ title, viewBox, fill, children }: SvgProps): JSX.Element {

  return (
      <svg
        xmlns={"http://www.w3.org/2000/svg"}
        xmlnsXlink={"http://www.w3.org/1999/xlink"}
        viewBox={viewBox}
        fill={fill}
      >
          {title && <title>{title}</title>}
          {children}
      </svg>
  )
}

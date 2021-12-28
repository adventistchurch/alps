import React from "react";

export interface MainProps {
  children?: React.ReactNode,
  spacing?: string
}

export const Main = ({ children, spacing = "u-padding--double--bottom u-spacing--double"}: MainProps): JSX.Element => {
  return (
    <main
      className={`l-main ${spacing ? spacing : ""}`}
      role="main"
    >
      {children}
    </main>
  )
}

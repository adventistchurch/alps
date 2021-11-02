import React from "react";

export interface BodyContentProps {
  children?: React.ReactNode
}

export const BodyContent = ({ children }: BodyContentProps): JSX.Element => {
  return <div className={"u-spacing--triple"}>{children}</div>
}

import React from "react";
import {TemplateWrap, TemplateWrapProps} from "./TemplateWrap";
import {Main} from "./Main";

export interface BlankTemplateProps {
    children?: React.ReactNode,
    templateProps: TemplateWrapProps
}

export const BlankTemplate = ({ children, templateProps }: BlankTemplateProps): JSX.Element => {
  return (
    <TemplateWrap {...templateProps}>
      <Main>{children}</Main>
    </TemplateWrap>
  )
}

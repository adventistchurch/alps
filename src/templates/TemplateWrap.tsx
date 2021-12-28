import React from "react";
import {Header, HeaderProps} from "../organisms/global/header/Header";
import {Footer, FooterProps} from "../organisms/global/footer/Footer";
import {Sabbath, SabbathProps} from "../organisms/asides/sabbath/Sabbath";

/**
 * TemplateWrap component
 *
 * Note: Don't use directly! This component is meant only to be used by templates.
 *
 * @param {Object} props
 */

export interface TemplateWrapProps {
    children?: React.ReactNode,
    footer: FooterProps,
    header: HeaderProps,
    sabbath: SabbathProps,
}

export const TemplateWrap = ({ children, footer, header, sabbath }: TemplateWrapProps): JSX.Element => {
  return (
    <div className="l-wrap">
      <div className="l-wrap__content l-content" role="document">
        <Header {...header} />
        {children}
        <Footer {...footer} />
      </div>
      <Sabbath {...sabbath} />
    </div>
  )
}
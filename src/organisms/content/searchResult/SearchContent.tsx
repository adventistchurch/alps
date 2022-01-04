import React from "react";
import {GridSeven} from "../../../atoms/grids/GridSeven";
import {GridItem} from "../../../atoms/grids/GridItem";
import {spacingSizesMap} from "../../../global/spacing";

export interface SearchContentProps {
  children?: React.ReactNode,
  sidebar?: React.ReactNode,
  hasDropcap?: boolean,
  spacing?: keyof typeof spacingSizesMap
}

export const SearchContent = ({ children, sidebar, hasDropcap = true }: SearchContentProps): JSX.Element => {
  return (
    <GridSeven
      as="section"
      className={"u-padding--zero--sides u-spacing--double--until-large l-grid l-grid--7-col l-grid-wrap--6-of-7 u-shift--left--1-col--at-large"}
    >
      <GridItem className="c-article" sizeAtL="3" sizeAtXL="3">
        <div className={`text c-article__body u-spacing--double ${hasDropcap ? "has-drop-cap" : ""}`}>
          {children}
        </div>
      </GridItem>

      {sidebar && (
        <div
          className="c-sidebar"
          // gridItemSizeAtL="2"
          // gridItemSizeAtXL="2"
          // paddingSides="zero"
        >
          {sidebar}
        </div>
      )}
    </GridSeven>
  )
}

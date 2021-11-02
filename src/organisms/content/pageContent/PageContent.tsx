import React from "react";
import {Text} from "../../../components/text/Text";
import {Breadcrumbs} from "../../../molecules/navigation/breadcrumbs/Breadcrumbs";

export interface PageContentProps {
  breadcrumbs?: [],
  children?: React.ReactNode,
  content?: React.ReactNode
}

export const PageContent = ({ children, content, breadcrumbs = [] }: PageContentProps): JSX.Element => (
  <Text className={"u-spacing"}>
    {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
    {children || content}
  </Text>
)

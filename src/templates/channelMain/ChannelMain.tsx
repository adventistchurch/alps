import React from "react";

import {BasicPage, BasicPageProps} from "../basicPage/BasicPage";

export interface ChannelMainProps {
  /**
   * ChannelMain component is a wrapper on BasicPage
   */
  basicPage: BasicPageProps
}

export const ChannelMain = ({ basicPage }: ChannelMainProps): JSX.Element => {
  return <BasicPage {...basicPage} />
}

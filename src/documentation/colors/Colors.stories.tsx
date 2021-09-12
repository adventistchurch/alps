import {Meta} from "@storybook/react";
import {Colors} from "./Colors";
import React from "react";


export default {
    title: "documentation/Colors",
    markdown: 'hello',
    parameters: {
        componentSubtitle: 'Component',
        status: 'released',
        previewTabs: {
            canvas: { hideNoControlsWarning: true },
        },
    },
    component: Colors,
} as Meta;

const Template = () => <Colors/>

export const colors = Template.bind({});
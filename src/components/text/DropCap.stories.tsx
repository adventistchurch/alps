import React from "react";
import {Meta, Story} from "@storybook/react";
import {Dropcap, DropCapProps} from "./Dropcap";
import {ComponentsTypes} from "../../global/commons";

export default {
    title: "components/Texts/Dropcap",
    component: Dropcap,
    parameters: {
        componentSubtitle: ComponentsTypes.COMPONENT,
    },
    argTypes: {
        letter: {
            name: "letter",
            defaultValue: "S",
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<DropCapProps> = (args) => <Dropcap {...args}/>

export const Basic = Template.bind({});
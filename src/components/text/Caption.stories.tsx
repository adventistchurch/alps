import React from "react";
import {Meta, Story} from "@storybook/react";
import {Caption, CaptionProps} from "./Caption";
import {ComponentsTypes} from "../../global/commons";

export default {
    title: "components/Texts/Caption",
    component: Caption,
    parameters: {
        componentSubtitle: ComponentsTypes.COMPONENT,
    },
    argTypes: {
        content: {
            name: "content",
            defaultValue: "A block quotation is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size quotation.",
            control: {type: "text"}
        }
    }
} as Meta;

const Template: Story<CaptionProps> = (args) => <Caption {...args}/>

export const Basic = Template.bind({});
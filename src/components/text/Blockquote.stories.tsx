import React from "react";
import {Meta, Story} from "@storybook/react";
import {Blockquote, BlockquoteProps} from "./Blockquote";
import {ComponentsTypes} from "../../global/commons";

export default {
    title: "components/Texts/Blockquote",
    component: Blockquote,
    parameters: {
        componentSubtitle: ComponentsTypes.COMPONENT,
    },
    argTypes: {
        content: {
            name: "content",
            defaultValue: "A block quotation is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size quotation.",
            control: {type: "text"}
        },
        isStrong: {
            name: "Is strong Blockquote",
            defaultValue: false,
            control: {type: "boolean"}
        }
    }
} as Meta;

const Template: Story<BlockquoteProps> = (args) => <Blockquote {...args}/>

export const Basic = Template.bind({});
export const Strong = Template.bind({});
Strong.argTypes = {
    isStrong: {
        table: {disable: true}
    }
}
Strong.args = {
    isStrong: true
}
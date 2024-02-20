import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Blockquote} from "./Blockquote";
import {ComponentsTypes} from "../../global/commons";

const meta = {
    title: "atoms/Texts/Blockquote",
    component: Blockquote,
    parameters: {
        componentSubtitle: ComponentsTypes.COMPONENT,
    },
    argTypes: {}
} satisfies Meta<typeof Blockquote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        content: "A block quotation is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size quotation."
    }
};

export const Strong: Story = {
    args: {
        ...Basic.args,
        isStrong: true
    }
}

import React from "react";
import {Meta, StoryObj} from '@storybook/react'
import {Kicker} from "./Kicker";
import {ComponentsTypes} from "../../global/commons";

const meta = {
    title: "atoms/Texts/Kicker",
    component: Kicker,
    parameters: {
        componentSubtitle: ComponentsTypes.COMPONENT,
    },
    argTypes: {}
} satisfies Meta<typeof Kicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        content: "A block quotation is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size quotation."
    }
};
import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Intro} from "./Intro";
import {ComponentsTypes} from "../../global/commons";

const meta = {
    title: "atoms/Texts/Intro",
    component: Intro,
    parameters: {
        componentSubtitle: ComponentsTypes.COMPONENT + ComponentsTypes.CAN_BE_USE_AS_WRAPPER,
    },
    argTypes: {
        content: {
            name: "content",
            defaultValue: "A block quotation is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size quotation.",
            control: {type: "text"}
        }
    }
} satisfies Meta<typeof Intro>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        content: "A block quotation is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size quotation."
    }
};

export const with_children = {
    args: {
        children: <Intro {...Basic.args}>Some Tag <a href="https://google.com">Google link</a></Intro>
    }
}

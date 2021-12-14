import React from "react";
import {Meta, Story} from "@storybook/react";
import {Intro, IntroProps} from "./Intro";
import {ComponentsTypes} from "../../global/commons";

export default {
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
} as Meta;

const Template: Story<IntroProps> = (args) => <Intro {...args}/>
export const Basic = Template.bind({});

const TemplateChildren: Story<IntroProps> = (args) =>
    <Intro {...args}>Some Tag <a href="https://google.com">Google link</a></Intro>

export const with_children = TemplateChildren.bind({});
with_children.argTypes = {
    content: {
        table: {disable: true}
    }
}
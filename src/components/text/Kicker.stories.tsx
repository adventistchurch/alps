import React from "react";
import {Meta, Story} from "@storybook/react";
import {Kicker, KickerProps} from "./Kicker";
import {ComponentsTypes} from "../../global/commons";

export default {
    title: "components/Texts/Kicker",
    component: Kicker,
    parameters: {
        componentSubtitle: ComponentsTypes.COMPONENT,
    },
    argTypes: {
        content: {
            name: "content",
            defaultValue: "A block quotation is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size quotation.",
            control: {type: "text"}
        },
        color: {
            defaultValue: "base",
            control: {type: "select"}
        }
    }
} as Meta;

const Template: Story<KickerProps> = (args) => <Kicker {...args}/>

export const Basic = Template.bind({});
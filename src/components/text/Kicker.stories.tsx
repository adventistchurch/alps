import {Meta, Story} from "@storybook/react";
import {Kicker, KickerProps} from "./Kicker";

export default {
    title: "components/Texts/Kicker",
    component: Kicker,
    argTypes: {
        content: {
            name: "content",
            defaultValue: "A block quotation is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size quotation.",
            control: {type: "text"}
        }
    }
} as Meta;

// eslint-disable-next-line react/react-in-jsx-scope
const Template: Story<KickerProps> = (args) => <Kicker {...args}/>

export const Basic = Template.bind({});
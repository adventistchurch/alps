import {Meta, Story} from "@storybook/react";
import {Caption, CaptionProps} from "./Caption";

export default {
    title: "components/Texts/Caption",
    component: Caption,
    argTypes: {
        content: {
            name: "Content of Caption",
            defaultValue: "A block quotation is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size quotation.",
            control: {type: "text"}
        }
    }
} as Meta;

// eslint-disable-next-line react/react-in-jsx-scope
const Template: Story<CaptionProps> = (args) => <Caption {...args}/>

export const Basic = Template.bind({});
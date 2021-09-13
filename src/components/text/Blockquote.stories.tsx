import {Meta, Story} from "@storybook/react";
import {Blockquote, BlockquoteProps} from "./Blockquote";

export default {
    title: "components/Texts/Blockquote",
    component: Blockquote,
    argTypes: {
        content: {
            name: "Content of Blockquote",
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

// eslint-disable-next-line react/react-in-jsx-scope
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
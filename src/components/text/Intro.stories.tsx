import {Meta, Story} from "@storybook/react";
import {Intro, IntroProps} from "./Intro";

export default {
    title: "components/Texts/Intro",
    component: Intro,
    argTypes: {
        content: {
            name: "content",
            defaultValue: "A block quotation is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size quotation.",
            control: {type: "text"}
        }
    }
} as Meta;

// eslint-disable-next-line react/react-in-jsx-scope
const Template: Story<IntroProps> = (args) => <Intro {...args}/>
export const Basic = Template.bind({});

const TemplateChildren: Story<IntroProps> = (args) =>
    // eslint-disable-next-line react/react-in-jsx-scope
    <Intro {...args}>Some Tag <a href="https://google.com">Google link</a></Intro>

export const with_children = TemplateChildren.bind({});
with_children.argTypes = {
    content: {
        table: {disable: true}
    }
}
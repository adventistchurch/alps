import {Meta, Story} from "@storybook/react";
import {DropCap, DropCapProps} from "./DropCap";

export default {
    title: "components/Texts/DropCap",
    component: DropCap,
    argTypes: {
        letter: {
            name: "letter",
            defaultValue: "S",
            control: {type: "text"}
        }
    }
} as Meta;

// eslint-disable-next-line react/react-in-jsx-scope
const Template: Story<DropCapProps> = (args) => <DropCap {...args}/>

export const Basic = Template.bind({});
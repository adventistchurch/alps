import {Meta, Story} from "@storybook/react";
import {Dropcap, DropCapProps} from "./Dropcap";

export default {
    title: "components/Texts/Dropcap",
    component: Dropcap,
    argTypes: {
        letter: {
            name: "letter",
            defaultValue: "S",
            control: {type: "text"}
        }
    }
} as Meta;

// eslint-disable-next-line react/react-in-jsx-scope
const Template: Story<DropCapProps> = (args) => <Dropcap {...args}/>

export const Basic = Template.bind({});
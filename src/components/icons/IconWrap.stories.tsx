import {Meta, Story} from '@storybook/react';
import {IconWrap, IconWrapProps} from "./IconWrap";
import {iconConfig} from "./_config";
import {grayscaleColors, themeColors} from "../../global/colors";

export default {
    title: "components/Icon Wrap",
    component: IconWrap,
    argTypes: {
        name: {
            name: "Icon Name",
            defaultValue: "logo",
            options: [""].concat(iconConfig.iconNames),
            control: {type: 'select'}
        },
        color: {
            name: "Color",
            options: [""].concat(grayscaleColors, themeColors),
            control: {type: 'select'}
        },
        background: {
            name: "Background",
            options: [""].concat(themeColors),
            control: {type: 'select'}
        },
        size: {
            name: "Size",
            defaultValue: "xl",
            options: iconConfig.iconSizes.available,
            control: {type: "inline-radio"}
        },
        iconPosition: {
            table: {disable: true}
        },
        className: {
            table: {disable: true}
        },
        as: {
            table: {disable: true}
        }
    }
} as Meta;

// eslint-disable-next-line react/react-in-jsx-scope
const Template: Story<IconWrapProps> = (args) => <IconWrap {...args}/>;

export const Default = Template.bind({});

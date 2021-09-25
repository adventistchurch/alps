import React from 'react';
import {Meta, Story} from "@storybook/react";
import {Slide, SlideProps} from "./Slide";
import data from "./Slide.stories.json";

export default {
    title: "molecules/components/Slide",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Slide,
    argTypes: {
        image: {
            defaultValue: data.image,
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<SlideProps> = (args) => <Slide {...args} />

export const Basic = Template.bind({});

export const with_heading = Template.bind({});
with_heading.args = {
    heading: data.heading,
    subtitle: data.subtitle,
    dek: data.dek,
    cta: data.cta,
    url: data.url,
    imageIsLazy: data.imageIsLazy
}
import React from "react";
import {Meta, Story} from "@storybook/react";
import data from "./Carousel.stories.json";
import {Carousel, CarouselProps} from "./Carousel";

export default {
    title: "molecules/components/Carousel",
    component: Carousel,
    argTypes: {
      slides: {
            defaultValue: data.slides,
            control: {type: "object"}
        }
    }
} as Meta;

const Template: Story<CarouselProps> = (args) =>
    <Carousel {...args}/>;
// export const Basic = Template.bind({});

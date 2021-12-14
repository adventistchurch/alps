import React, { useState } from 'react';
import {Meta, Story} from "@storybook/react";
import {Progress, ProgressProps, sizeMap} from "./Progress";
import {Button} from "../../../atoms/button/Button";

export default {
    title: "molecules/components/Progress",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Progress,
    argTypes: {
        fixed: {
            defaultValue: true,
            control: {type: "boolean"}
        },
        percentage: {
            options: { min: 0, max: 100 },
            control: {type: "number"}
        },
        size: {
            defaultValue: sizeMap.medium,
            control: {type: "select"}
        },
        visible: {
            control: {type: "boolean"}
        }
    }
} as Meta;

const Template: Story<ProgressProps> = (args) => <Progress {...args} />

export const Basic = Template.bind({});

export const With_percentage = Template.bind({});
With_percentage.args = {
    percentage: 50
}

export const Hairline = Template.bind({});
Hairline.args = {
    size: "hairline"
}

export const Small = Template.bind({});
Small.args = {
    size: "small"
}

export const Medium = Template.bind({});
Medium.args = {
    size: "medium"
}

export const Large = Template.bind({});
Large.args = {
    size: "large"
}

export const Huge = Template.bind({});
Huge.args = {
    size: "huge"
}

const FixedTemplate: Story<ProgressProps> = (args) => {
    const [percentage, setPercentage] = useState(50);
    return (
        <div className={"u-padding--double u-spacing--double"}>
            <Progress {...args} percentage={percentage} />
            <h1>
                Scroll untill you see <em>Hello!</em>
            </h1>

            {[1, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(x => (
                <div key={`p-${x}`}>
                    <Button label={`Set to ${x}%`} onClick={() => setPercentage(x)} />
                </div>
            ))}
            <h1 style={{ marginTop: '50vh' }}>
                <em>Hello!</em>
            </h1>
        </div>
    )
}

export const Fixed = FixedTemplate.bind({});
Fixed.args = {
    fixed: true
}
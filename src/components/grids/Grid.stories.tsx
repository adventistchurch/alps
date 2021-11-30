import React from 'react'
import {Meta, Story} from '@storybook/react'

import {Grid, GridProps, wrapSizes} from './Grid'
import {GridItem} from './GridItem'
import {ComponentsTypes} from "../../global/commons";

export default {
    title: "components/Grid",
    parameters: {
        componentSubtitle: ComponentsTypes.COMPONENT + ComponentsTypes.CAN_BE_USE_AS_WRAPPER,
        status: 'released'
    },
    component: Grid,
    argTypes: {
        as: {
            defaultValue: "div",
            options: ["article", "div", "section"],
            control: {type: "select"}
        },
        wrap: {
            name: "Wrap (x of 7)",
            options: wrapSizes,
            control: {type: "select"}
        },
        noGutters: {
            name: "No Gutters",
            defaultValue: false,
            control: {type: "boolean"}
        },
        seven: {
            name: "Seven",
            defaultValue: false,
            control: {type: "boolean"}
        },
        blockRow: {
            defaultValue: false,
            control: {type: "boolean"}
        },
        noWrapClass: {
            defaultValue: false,
            control: {type: "boolean"}
        },
        sevenInner: {
            defaultValue: false,
            control: {type: "boolean"}
        }
    }
} as Meta;

const Template: Story<GridProps> = (args) => {
    return (
        <Grid {...args}>
            <GridItem sizeAtS="3" sizeAtXL="2">
                Test_1
            </GridItem>
            <GridItem sizeAtS="3" sizeAtXL="2">
                Test_2
            </GridItem>
            <GridItem sizeAtS="3" sizeAtXL="2">
                Test_3
            </GridItem>
            <GridItem sizeAtS="3" sizeAtXL="2">
                Test_4
            </GridItem>
            <GridItem sizeAtS="3" sizeAtXL="2">
                Test_5
            </GridItem>
            <GridItem sizeAtS="3" sizeAtXL="2">
                Test_6
            </GridItem>
            <GridItem sizeAtS="3" sizeAtXL="2">
                Test_7
            </GridItem>
        </Grid>
    )
}

export const Basic = Template.bind({});

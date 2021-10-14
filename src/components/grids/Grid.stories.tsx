import React from 'react'
import {Meta, Story} from '@storybook/react'

import {Grid, GridProps, wrapSizes} from './Grid'
import {GridItem} from './GridItem'

export default {
    title: "components/Grid",
    parameters: {
        componentSubtitle: 'Component',
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
            control: {type: "boolean"}
        },
        seven: {
            name: "Seven",
            control: {type: "boolean"}
        }
    }
} as Meta;

const Template: Story<GridProps> = (args) => {
    return (
        <Grid as={args.as} noGutters={args.noGutters} seven={args.seven} wrap={args.wrap}>
            <GridItem sizeAtS="3" sizeAtXL="2">
                Test
            </GridItem>
            <GridItem sizeAtS="3" sizeAtXL="2">
                Test
            </GridItem>
        </Grid>
    )
}

export const Basic = Template.bind({});

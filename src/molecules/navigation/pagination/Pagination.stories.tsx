import React from 'react';
import {Meta, Story} from "@storybook/react";
import {Pagination, PaginationProps} from "./Pagination";

import data from "./Pagination.stories.json";

export default {
    title: "molecules/navigation/Pagination",
    parameters: {
        componentSubtitle: 'Component',
        status: 'released'
    },
    component: Pagination,
    argTypes: {
        page: {
            name: "Current Page",
            defaultValue: data.default.page,
            control: {type: "number"}
        },
        dividerLabel: {
            name: "Divider Label",
            defaultValue: data.default.dividerLabel,
            control: {type: "text"}
        },
        surrounding: {
            name: "Surrounding",
            defaultValue: data.default.surrounding,
            control: {type: "number"}
        },
        showFirstAndLast: {
            name: "show First and Last",
            defaultValue: data.default.showFirstAndLast,
            control: {type: "boolean"}
        },
        showPrevAndNext: {
            name: "show Prev and Next",
            defaultValue: data.default.showPrevAndNext,
            control: {type: "boolean"}
        },
        total: {
            defaultValue: data.default.total,
            control: {type: "number"}
        },
    }
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />

export const Basic = Template.bind({});
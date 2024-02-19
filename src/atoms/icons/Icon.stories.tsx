import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {Icon} from './Icon';

const meta = {
    title: "atoms/Icon",
    component: Icon,
    argTypes: {},
    parameters: {
        viewport: {
            defaultViewport: 'custom',
            viewports: {
                custom: {
                    name: 'Custom',
                    styles: {
                        width: '500px',
                        height: '500px',
                    },
                },
            },
        },
    }
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultIcon: Story = {
    args: {
        name: "logo"
    }
}

export const arrow_brackets: Story = {
    args: {
        name: "arrow-bracket-left"
    }
}

export const arrow_long_brackets: Story = {
    args: {
        name: "arrow-long-left"
    }
}

export const arrow_short_brackets: Story = {
    args: {
        name: "arrow-short-left"
    }
}

export const logos: Story = {
    args: {
        name: "logo"
    }
}

export const close: Story = {
    args: {
        name: "close"
    }
}

export const contacts: Story = {
    args: {
        name: "contact"
    }
}

export const dots: Story = {
    args: {
        name: "dots"
    }
}

export const language: Story = {
    args: {
        name: "language"
    }
}

export const legal: Story = {
    args: {
        name: "language"
    }
}

export const plus: Story = {
    args: {
        name: "plus"
    }
}

export const search: Story = {
    args: {
        name: "search"
    }
}

export const settings: Story = {
    args: {
        name: "settings"
    }
}

export const share: Story = {
    args: {
        name: "share"
    }
}

export const subscribe: Story = {
    args: {
        name: "subscribe"
    }
}

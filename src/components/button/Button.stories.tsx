import React from 'react';
import {storiesOf} from '@storybook/react'
import {boolean, select, text as textInput} from '@storybook/addon-knobs';

import {Button} from './Button';
import {buttonConfig} from "./config";

function getTabData(name: string, settings = {}) {
    return {
        tab: name,
        ...buttonConfig.defaultProps,
        ...buttonConfig.data,
        ...settings,
    }
}

function generalTab(settings = {}) {
    const { as, label, url, tab } = getTabData('General', settings)
    return {
        label: textInput('Text *', label, tab),
        url: textInput('URL', url, tab),
        as: select('As', buttonConfig.asOptions, as, tab),
    }
}

function settingsTab(settings = {}) {
    const {
        disabled,
        expand,
        lighter,
        outline,
        simple,
        small,
        toggle,
        tab,
    } = getTabData('Settings', settings)
    return {
        disabled: boolean('Disabled', disabled, tab),
        expand: boolean('Expand', expand, tab),
        lighter: boolean('Lighter', lighter, tab),
        outline: boolean('Outline', outline, tab),
        simple: boolean('Simple', simple, tab),
        small: boolean('Small', small, tab),
        toggle: boolean('Toggle', toggle, tab),
    }
}

function allTabs(settings = {}) {
    const generalProps = generalTab(settings);
    // const iconProps = iconTab(settings)
    const settingsProps = settingsTab(settings);

    // return { ...generalProps, ...iconProps, ...settingsProps }
    return { ...generalProps, ...settingsProps }
}

storiesOf('Components/Button', module)
    .add('Default', () => {
        const props = allTabs()
        return <Button {...props} />
    })

    .add('Disabled', () => {
        const props = allTabs({ disabled: true })
        return <Button {...props} />
    })

    .add('Lighter', () => {
        const props = allTabs({ lighter: true })
        return <Button {...props} />
    })

    .add('Outline', () => {
        const props = allTabs({ outline: true })
        return <Button {...props} />
    })

    .add('Simple', () => {
        const props = allTabs({ simple: true })
        return <Button {...props} />
    })

    .add('Small', () => {
        const props = allTabs({ small: true })
        return <Button {...props} />
    })
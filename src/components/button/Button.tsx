import React from 'react';
import useClasses from "../../helpers/useClasses";

interface ButtonProps {
    disabled?: boolean,
    lighter?: boolean,
    outline?: boolean,
    simple?: boolean,
    small?: boolean,
    toggle?: boolean,
    backgroundColor?: string;
    label: string;
    onClick?: () => void;
}

export const Button = ({
                           backgroundColor,
                           label,
                           disabled = false,
                           lighter = false,
                           outline = false,
                           simple = false,
                           small = false,
                           toggle = false,
                           ...props
                       }: ButtonProps) => {

    const buttonClass = useButtonClass(
        'o-button',
        disabled,
        {
            lighter: lighter,
            outline: outline,
            simple: simple,
            small: small,
            toggle: toggle,
        },
        ""
    )

    return (
        <button
            className={buttonClass}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
}

export const buttonConfig = {
    asOptions: ['a', 'button', 'span'],
    iconPositions: ['left', 'right'],
    defaultProps: {
        as: 'button',
        primary: false,
        disabled: false,
        expand: false,
        lighter: false,
        outline: false,
        simple: false,
        small: false,
        toggle: false,
        className: '',
        iconFill: 'white',
        iconPosition: 'left',
        iconSize: 'xs'
    }
}

function useButtonClass(base: string, disabled: boolean, flags: {[key: string]: string | boolean }, extras: any) {

    const validClasses: {[key: string]: string | boolean } = { disabled: disabled };

    Object.keys(flags).map(flag => {
        if (flags[flag]) {
            validClasses[`${base}--${flag}`] = flags[flag];
        }
    })


    return useClasses(
        base,
        validClasses,
        extras
    )
}

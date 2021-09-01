import React from 'react';
import useClasses from "../../helpers/useClasses";
import {buttonConfig} from "./config";

interface ButtonProps {
    disabled?: boolean,
    lighter?: boolean,
    outline?: boolean,
    simple?: boolean,
    small?: boolean,
    toggle?: boolean,
    label: string;
    as: string,
    url: string,
    onClick?: () => void;
}

export const Button = ({
    label,
    disabled = false,
    lighter = false,
    outline = false,
    simple = false,
    small = false,
    toggle = false,
    url,
    ...props
}: ButtonProps): JSX.Element => {

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
    );

    let elementByType: JSX.Element;

    switch (props.as) {
        case buttonConfig.asOptions[0]:
            elementByType =
                <a className={buttonClass} href={url}>
                    {label}
                </a>;
            break;
        case buttonConfig.asOptions[2]:
            elementByType =
                <span className={buttonClass}>
                    {label}
                </span>;
            break;
        default:
            elementByType =
                <button className={buttonClass}>
                    {label}
                </button>;
            break;
    }

    return (elementByType);

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

import React from 'react';
import useClasses from "../../helpers/useClasses";
import {buttonConfig} from "./_config";
import {IconWrap} from "../../icons/IconWrap";
import {iconConfig} from "../../icons/_config";

export interface ButtonProps {
    /**
     * Specify whether the Button should be disabled, or not
     */
    disabled?: boolean,
    /**
     * Specify whether the Button should be a lighter, or not
     */
    lighter?: boolean,
    /**
     * Specify whether the Button should be a outline, or not
     */
    outline?: boolean,
    /**
     * Specify whether the Button should be a simple, or not
     */
    simple?: boolean,
    /**
     * Specify whether the Button should be a small variant
     */
    small?: boolean,
    /**
     * Specify whether the Button should be a toggle variant
     */
    toggle?: boolean,
    /**
    * Specify the content of your Button
    */
    label: string;
    /**
     * Specify the type of your Button
     */
    as: 'a' | 'button' | 'span',
    /**
     * Specify the url for `a` type of your Button
     */
    url: string,
    /**
     * Specify an `icon` to include in the Button through an string (name of the icon) representing the SVG data of the icon, similar to the `Icon` component
     */
    icon?: keyof typeof iconConfig.iconNamesMap,
    iconFill?: string,
    iconSize?: keyof typeof iconConfig.iconSizes.map,
    /**
     * You can set position of icon into the button
     */
    iconPosition?: "left" | "right",
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
                           iconPosition = "left",
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

    const icon = props.icon && (
        <IconWrap
            color={"white"}
            name={props.icon}
            fill={props.iconFill}
            size={props.iconSize}
            iconPosition={iconPosition}
        />
    );

    const labelWithIcon = (
        <>
            {iconPosition === "left" && icon}
            {label}
            {iconPosition === "right" && icon}
        </>
    );

    let elementByType: JSX.Element;

    switch (props.as) {
        case buttonConfig.asOptions[0]:
            elementByType =
                <a className={buttonClass} href={url}>
                    {labelWithIcon}
                </a>;
            break;
        case buttonConfig.asOptions[2]:
            elementByType =
                <span className={buttonClass}>
                    {labelWithIcon}
                </span>;
            break;
        default:
            elementByType =
                <button className={buttonClass}>
                    {labelWithIcon}
                </button>;
            break;
    }

    return (elementByType);

}

function useButtonClass(base: string, disabled: boolean, flags: { [key: string]: string | boolean }, extras: any) {

    const validClasses: { [key: string]: string | boolean } = {disabled: disabled};

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

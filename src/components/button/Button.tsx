import React, {MouseEventHandler, useCallback} from 'react';
import useClasses from "../../helpers/useClasses";
import {buttonConfig} from "./_config";
import {IconWrap} from "../icons/IconWrap";
import {iconConfig} from "../icons/_config";
import useToggle from "../../helpers/useToggle";

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
    onClick?: (event: MouseEventHandler<HTMLAnchorElement>) => void;
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
                           onClick,
                           ...props
                       }: ButtonProps): JSX.Element => {

    const {openClass, onToggle} = useToggle(false)

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
        openClass
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

    const _onClick = onClick || toggle ? useCallback(
        event => {
            if (onClick) onClick(event)
            if (toggle) onToggle()
        },
        [onClick, onToggle, toggle]
    ) : null;

    let elementByType: JSX.Element;

    switch (props.as) {
        case buttonConfig.asOptions[0]:
            elementByType =
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <a className={buttonClass} href={url} onClick={_onClick}>
                    {labelWithIcon}
                </a>;
            break;
        case buttonConfig.asOptions[2]:
            elementByType =
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <span className={buttonClass} onClick={_onClick}>
                    {labelWithIcon}
                </span>;
            break;
        default:
            elementByType =
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <button className={buttonClass} onClick={_onClick}>
                    {labelWithIcon}
                </button>;
            break;
    }

    return (elementByType);

}

function useButtonClass(base: string, disabled: boolean, flags: { [key: string]: string | boolean }, extras: any) {

    const validClasses: { [key: string]: string | boolean } = {disabled: disabled};

    // eslint-disable-next-line array-callback-return
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

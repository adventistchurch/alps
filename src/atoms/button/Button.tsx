import React, { useCallback } from "react";
import useClasses from "../../helpers/useClasses";
import { buttonConfig } from "./_config";
import { IconWrap } from "../icons/IconWrap";
import { iconConfig } from "../icons/_config";
import useToggle from "../../helpers/useToggle";

// import "../../styles/main/main.css";

export interface ButtonProps {
  /**
   * Specify whether the Button should be disabled, or not
   */
  disabled?: boolean;
  /**
   * Specify whether the Button should be a lighter, or not
   */
  lighter?: boolean;
  /**
   * Specify whether the Button should be a outline, or not
   */
  outline?: boolean;
  /**
   * Specify whether the Button should be a simple, or not
   */
  simple?: boolean;
  /**
   * Specify whether the Button should be a small variant
   */
  small?: boolean;
  /**
   * Specify whether the Button should be a toggle variant
   */
  toggle?: boolean;
  /**
   * Specify whether the Button should be a toggle variant
   */
  expand?: boolean;
  /**
   * Specify the content of your Button
   */
  label?: string;
  /**
   * Specify the type of your Button
   */
  as?: "a" | "button" | "span";
  /**
   * Specify the url for `a` type of your Button
   */
  url?: string;
  /**
   * Specify an `icon` to include in the Button through an string (name of the icon) representing the SVG data of the icon, similar to the `Icon` component
   */
  icon?: keyof typeof iconConfig.iconNamesMap;
  iconSize?: keyof typeof iconConfig.iconSizes.map;
  /**
   * You can set position of icon into the button
   */
  iconPosition?: "left" | "right";
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLSpanElement>) => void;
  className?: string;
  isExternal?: boolean;
}

/**
 * Buttons express what action will occur when the user clicks or touches it.
 * Buttons are used to initialize an action, either in the background or foreground of an experience.
 */
export const Button = ({
  label = "",
  disabled = false,
  lighter = false,
  outline = false,
  simple = false,
  small = false,
  toggle = false,
  expand = false,
  url,
  iconPosition = "left",
  iconSize = "xs",
  onClick,
  isExternal = false,
  ...props
}: ButtonProps): JSX.Element => {
  const { openClass, onToggle } = useToggle(false);

  const buttonClass = useButtonClass(
    "o-button",
    disabled,
    {
      lighter: lighter,
      outline: outline,
      simple: simple,
      small: small,
      toggle: toggle,
      expand: expand,
    },
    toggle ? openClass : ''
  );

  const icon = props.icon && (
    <IconWrap
      color={"white"}
      name={props.icon}
      size={iconSize}
      iconPosition={iconPosition}
    />
  );

  const labelWithIcon = (
    <>
      {iconPosition === "left" && icon}
      {label}
      {iconPosition === "right" && icon}
      {isExternal && !props.icon && (
        <i className="fa fa-external-link u-space--quarter--left"></i>
      )}
    </>
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const _onClick = useCallback(
        (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLSpanElement>) => {
          if (onClick) onClick(event);
          if (toggle) onToggle();
          if (expand) {
            const buttonElement = event.currentTarget as HTMLElement;
            const parentElement = buttonElement.parentElement;
            if (parentElement) {
              parentElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }            
          }
        },
        [onClick, onToggle, toggle, expand]
      );

  const handleClick = onClick || toggle ? _onClick : undefined;

  let elementByType: JSX.Element;

  const classes = props.className ? " " + props.className : "";

  switch (props.as) {
    case buttonConfig.asOptions[0]:
      const target = isExternal ? { target: "_blank" } : {};
      elementByType = (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <a className={buttonClass + classes} href={url} {...target} onClick={handleClick}>
          {labelWithIcon}
        </a>
      );
      break;
    case buttonConfig.asOptions[2]:
      elementByType = (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <span className={buttonClass + classes} onClick={handleClick}>
          {labelWithIcon}
        </span>
      );
      break;
    default:
      elementByType = (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <button className={buttonClass + classes} onClick={handleClick}>
          {labelWithIcon}
        </button>
      );
      break;
  }

  return elementByType;
};

function useButtonClass(
  base: string,
  disabled: boolean,
  flags: { [key: string]: string | boolean },
  extras: any
) {
  const validClasses: { [key: string]: string | boolean } = {
    disabled: disabled,
  };

  // eslint-disable-next-line array-callback-return
  Object.keys(flags).map((flag) => {
    if (flags[flag]) {
      validClasses[`${base}--${flag}`] = flags[flag];
    }
  });

  return useClasses(base, validClasses, extras);
}

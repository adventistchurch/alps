import React from "react";
import { IconWrap } from "../../../atoms/icons/IconWrap";
import { SubNavArrow } from "../primaryNavItem/SubNavArrow";
import { SubNav } from "../primaryNavItem/SubNav";
import { iconConfig } from "../../../atoms/icons/_config";

export interface SecondaryNavItemProps {
  icon?: keyof typeof iconConfig.iconNamesMap;
  isPriority?: boolean;
  noWrap?: boolean;
  onClick?: (any: any) => void;
  subnav?: [];
  text: string;
  type?: "search" | "menu";
  url?: string;
}

export const SecondaryNavItem = ({
  icon,
  isPriority = false,
  noWrap,
  onClick,
  subnav,
  type,
  text,
  url = "#",
}: SecondaryNavItemProps): JSX.Element => {
  const linkAttr = {
    // to: url || "",
    // href: url || "",
    className: `c-secondary-nav__link u-font--secondary-nav u-theme--link-hover--base u-color--gray 
    ${noWrap ? "u-flex--nowrap" : ""}`,
  };
  const iconComp = icon && <IconWrap name={icon} size="xs" color="gray" />;
  return (
    <li
      className={`c-secondary-nav__list-item ${
        isPriority ? "is-priority" : ""
      } ${subnav ? "has-subnav" : ""} ${
        type ? `c-secondary-nav__list-item__${type}` : ""
      }
      `}
    >
      {onClick ? (
        <a {...linkAttr} onClick={onClick}>
          {iconComp}
          {text}
        </a>
      ) : (
        <a {...linkAttr} href={url} onClick={onClick}>
          {iconComp}
          {text}
        </a>
      )}
      {subnav && (
        <>
          <SubNavArrow />
          <SubNav items={subnav} type="secondary" />
        </>
      )}
    </li>
  );
};

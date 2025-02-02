import React, {useCallback} from 'react';
import {SubNavArrow} from './SubNavArrow';
import useToggle from '../../../helpers/useToggle';
import {SubNav} from './SubNav';
import {
  backgroundColorClass,
  themeBackgroundClass,
  themeLinkHoverClass
} from '../../../global/colors';

export interface SubNavItemProps {
  active?: boolean;
  level?: 'secondary' | 'tertiary';
  onClick?: (e: any) => void;
  subnav?: SubNavItemProps[];
  text: string;
  type: 'primary' | 'secondary';
  url?: string;
  isExternal?: boolean; //Eli added
}

export const SubNavItem = ({
  active = false,
  level,
  subnav,
  text,
  url,
  type,
  onClick,
  isExternal = url?.indexOf('http') === 0
}: SubNavItemProps): JSX.Element => {
  const {onToggle, openClass} = useToggle(false);
  const hasSubnav = Array.isArray(subnav) && subnav.length > 0;
  const isTertiary = level === 'tertiary';
  const navLevel = isTertiary ? 'subnav__subnav' : 'subnav';

  const onArrowClick = useCallback(
    (e: {stopPropagation: () => void}) => {
      e.stopPropagation();
      onToggle();
    },
    [onToggle]
  );

  const linkAttr = {
    target: isExternal ? '_blank' : undefined,
    to: url || '',
    href: url || '',
    className: `c-${type}-nav__${navLevel}__link c-subnav__link 
    ${active ? ' active' : ''}
    ${
      isTertiary
        ? themeLinkHoverClass + '--lighter'
        : themeLinkHoverClass + '--base'
    }`,
    color: `gray${type === 'primary' ? '--dark' : ''}`
  };

  const linkIcon = isExternal && (
    <i className="fa fa-external-link u-space--quarter--left"></i>
  );
  return (
    <li
      className={`c-${type}-nav__${navLevel}__list-item c-subnav__list-item 
                ${hasSubnav ? 'has-subnav' : ''} 
                ${openClass}
                ${isTertiary ? null : backgroundColorClass + '--gray--light'}
                ${isTertiary ? themeBackgroundClass + '--base' : null}
            `}
    >
      <a {...linkAttr} onClick={onClick}>
        {text}
        {linkIcon}
      </a>
     
      {hasSubnav && (
        <SubNavArrow
          fill="gray"
          className={openClass}
          onClick={onArrowClick}
          isSubNav
        />
      )}
      {hasSubnav && <SubNav items={subnav} level="tertiary" type={type} />}
    </li>
  );
};

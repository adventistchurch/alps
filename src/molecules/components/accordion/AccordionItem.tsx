import React, {useCallback} from 'react'

import useToggle from "../../../helpers/useToggle";
import {IconWrap} from "../../../components/icons/IconWrap";
import {themeColorClass} from "../../../global/colors";

export interface AccordionItemProps {
    icon?: string,
    open?: boolean,
    children?: React.ReactNode,
    content?: React.ReactNode,
    heading: React.ReactNode,
    onChange?: (open: boolean) => void
}

export const AccordionItem = ({
                                  children,
                                  content,
                                  icon,
                                  heading,
                                  open: initialOpen,
                                  onChange
                              }: AccordionItemProps): JSX.Element => {

    const {onToggle, openClass, open} = useToggle(initialOpen);

    const _onToggle = useCallback(() => {
        if (onChange) onChange(!open)

        onToggle();
    }, [onChange, onToggle, open])

    return (
        <div className={`c-accordion__item ${openClass} u-border--left u-padding--half--left u-spacing--half`}>
            <div
                className={`c-accordion__heading u-font--primary--m ${themeColorClass}--darker`}
                onClick={_onToggle}
                style={{userSelect: "none"}}
            >
                <IconWrap
                    className={"c-accordion__arrow u-space--half--right"}
                    name={"arrow-bracket-right"}
                    color={"darker"}
                />
                <strong>{heading}</strong>
                {icon && (
                    <IconWrap
                        className={"u-space--half--left"}
                        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                        // @ts-ignore
                        name={icon}
                        size={"s"}
                        color={"darker"}
                    />
                )}
            </div>
            <div className="c-accordion__content u-padding--half--left">
                {content || children}
            </div>
        </div>
    )
}

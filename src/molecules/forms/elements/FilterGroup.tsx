import React from "react";
import Title from "../../../atoms/text/Title";

export interface FormFilterProps {
    title: string,
    options?: {
        checked?: boolean,
        id?: number,
        name?: string,
        type?: "radio" | "checkbox",
        value?: string
    }[]
}

export const FilterGroup = ({options = [], title}: FormFilterProps): JSX.Element => {
    return (
        <div className="c-filter__form-item u-spacing--half l-grid-item l-grid-item--s--2-col l-grid-item--l--1-col">
            <Title
                className={"u-text--strong u-text-transform--upper "}
                as="h3"
                fontType="secondary"
                fontSize="s"
                text={title}
                themeColor="base"
            />
            {options.map(({checked, id, name, type, value}, key) => {
                const inputId = `${type}-${id}`
                const inputType = type ? type : "radio"
                return (
                    <div className="c-filter__form-group" key={key}>
                        <input
                            defaultChecked={checked}
                            id={inputId}
                            name={inputType}
                            type={inputType}
                            value={value}
                        />
                        <label htmlFor={inputId}>{name}</label>
                    </div>
                )
            })}
        </div>
    )
}

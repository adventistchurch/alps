import React from "react";

import {FormLabel} from './FormLabel';

export interface DropdownProps {
    allowNone?: boolean,
    defaultValue?: string | number,
    value?: string | number,
    error?: string,
    hideNone?: boolean,
    id?: string,
    label?: string,
    labelOptional?: string,
    labelClass?: string,
    name: string,
    options: {text: string, value: number | string}[],
    noneLabel?: React.ReactNode,
    noneValue?: any,
    darkMode?: boolean,
     onChange?: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

export const Dropdown = ({
                             allowNone = true,
                             defaultValue,
                             value,
                             error,
                             hideNone,
                             id,
                             label,
                             labelOptional,
                             labelClass,
                             name,
                             noneLabel = "-",
                             noneValue,
                             options = [],
                             darkMode = false,
                             onChange
                         }: DropdownProps): JSX.Element => {
    return (
        <FormLabel
            className={labelClass}
            error={error}
            htmlFor={id || name}
            text={label}
            textOptional={labelOptional}
            darkMode={darkMode}
        >
            <select defaultValue={defaultValue} id={id || name} name={name} value={value} onChange={onChange}>
                {!hideNone && (
                    <option
                        key={`${name}-option-none`}
                        value={noneValue}
                        disabled={!allowNone}
                    >
                        {noneLabel}
                    </option>
                )}
                {options.map(({text, value}, key) => (
                    <option key={`${name}-option-${key}`} value={value}>
                        {text}
                    </option>
                ))}
            </select>
        </FormLabel>
    )
}

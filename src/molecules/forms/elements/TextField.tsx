import React, {useImperativeHandle, forwardRef, MouseEventHandler} from 'react';

import {FormLabel} from './FormLabel';
import {BaseInput} from './BaseInput';

export interface TextFieldProps {
  error?: string;
  id?: string;
  label?: string;
  labelOptional?: string;
  labelClass?: string;
  labelSpacing?: string;
  name: string;
  placeholder?: string;
  type?:
    | 'email'
    | 'password'
    | 'search'
    | 'text'
    | 'number'
    | 'checkbox'
    | 'textarea';
  value?: string;
  rows?: number;
  required?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
   onClick?: (event: MouseEventHandler<HTMLAnchorElement>) => void;
}

export interface TextFieldRef {
  isValid: () => boolean;
}

export const TextField = forwardRef<TextFieldRef, TextFieldProps>(
  (
    {
      label,
      labelOptional,
      labelClass,
      labelSpacing,
      type = 'text',
      rows,
      onChange,
      onClick,
      ...props
    }: TextFieldProps,
    ref
  ): JSX.Element => {
    const [value, setValue] = React.useState(props.value || '');
    const [touched, setTouched] = React.useState(false);

    const isValid = !props.required || (!!value && value.trim() !== '');

    const showError = touched && !isValid;

    React.useEffect(() => {
      setValue(props.value || '');
    }, [props.value]);

    useImperativeHandle(ref, () => ({
      isValid: () => isValid
    }));

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setValue(e.target.value);
      if (onChange) onChange(e);
    };

    const handleBlur = () => {
      setTouched(true);
    };

    return (
      <FormLabel
        className={labelClass}
        error={showError ? 'Полето е задължително' : props.error}
        htmlFor={props.name}
        text={label}
        textOptional={labelOptional}
        required={props.required}
        // spacing={labelSpacing}
      >
        {type === 'textarea' ? (
          <textarea
            required={props.required}
            id={ props.id || props.name}
            name={props.name}
            rows={rows}
            placeholder={props.placeholder}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ) : (
          <BaseInput
            {...props}
            type={type}
            value={value}
            onChange={handleChange}
            onClick={onClick}
            onBlur={handleBlur}
          />
        )}
      </FormLabel>
    );
  }
);

import React, {useMemo} from 'react';

import useClasses from '../../../helpers/useClasses';

export interface BaseInputProps {
  checked?: boolean;
  error?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  type?:
    | 'checkbox'
    | 'email'
    | 'password'
    | 'number'
    | 'radio'
    | 'search'
    | 'text'
    | 'textarea'
    | 'file';
  value?: string;
  required?: boolean;
  accept?: string;
  rows?: number;
  onClick?: (
    e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const BaseInput = ({
  checked,
  error,
  type = 'text',
  value = '',
  name,
  id,
  placeholder,
  required = false,
  accept,
  rows,
  onChange,
  onClick,
  onBlur
}: BaseInputProps): JSX.Element => {
  const inputClass = useClasses('form-input', {
    'has-error': !!error
  });

  const isTextArea = type === 'textarea';
  const isFile = type === 'file';

  const fileStyles = {
    display: 'none'
  };

  const fileName = useMemo(() => {
    if (isFile && typeof value === 'string' && value) {
      // Extract file name from the value (full path or file name)
      const parts = value.split(/(\\|\/)/g);
      return parts[parts.length - 1];
    }
    return '';
  }, [isFile, value]);

  const elementProps: React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement> = {
    className: inputClass,
    type: isTextArea ? undefined : type,
    rows: isTextArea ? rows : undefined,
    name: name,
    id: id || name,
    placeholder: placeholder,
    required: required,
    accept: isFile ? accept : undefined,
    onChange: onChange,
    autoComplete: 'on',
    onBlur: onBlur,
    style: isFile ? fileStyles : undefined,
    value: value
  };
  // Only assign onClick if it's a valid input event handler
  if (!isTextArea && typeof onClick === 'function') {
    (elementProps as React.InputHTMLAttributes<HTMLInputElement>).onClick =
      onClick as unknown as React.MouseEventHandler<HTMLInputElement>;
  }
  if ((type === 'checkbox' || type === 'radio') && checked !== undefined) {
    (
      elementProps as React.InputHTMLAttributes<HTMLInputElement>
    ).defaultChecked = checked;
  }

  const element = isTextArea
    ? React.createElement('textarea', elementProps)
    : React.createElement('input', elementProps);

  return (
    <>
      {element}
      {isFile && (
        <input
          type="text"
          name="fileName"
          disabled
          value={fileName}
          placeholder="image.jpg"
        />
      )}
    </>
  );
};

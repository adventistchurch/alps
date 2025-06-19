import React, {MouseEventHandler, useState} from 'react';

import useClasses from '../../../helpers/useClasses';
import useInputFocus from '../../../helpers/useInputFocus';

export interface BaseInputProps {
  checked?: boolean;
  error?: string;
  hasFocus?: boolean;
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
  onClick?: (event: MouseEventHandler<HTMLAnchorElement>) => void;
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
  value,
  hasFocus = false,
  name,
  id,
  placeholder,
  required = false,
  accept,
  onChange,
  onClick,
  onBlur
}: BaseInputProps): JSX.Element => {
  const inputClass = useClasses('form-input', {
    'has-error': !!error
  });

  const [fileName, setFileName] = useState<string>('');

  const inputFocusRef = useInputFocus(hasFocus);

  const isTextArea = type === 'textarea';
  const isFile = type === 'file';

  const fileStyles = {
    display: 'none'
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target instanceof HTMLInputElement && e.target.type === 'file') {
      setFileName(e.target.files?.[0]?.name || '');
    }

    if (onChange) onChange(e);
    return true;
  };

  const element = React.createElement(
    isTextArea ? 'textarea' : 'input',
    {
      className: inputClass,
      defaultChecked: checked,
      value: value,
      ref: inputFocusRef,
      type,
      name: name,
      id: id || name,
      placeholder: placeholder,
      required: required,
      accept: isFile ? accept : undefined,
      onChange: handleChange,
      autocomplete: 'on',
      onClick: isTextArea ? null : onClick,
      onBlur: onBlur,
      style: {
        ...(isFile ? fileStyles : {})
      }
    },
    isTextArea ? value : null
  );

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

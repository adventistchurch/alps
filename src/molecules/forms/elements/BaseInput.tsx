import React, {MouseEventHandler} from 'react';

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
    | 'textarea';
  value?: string;
  required?: boolean;
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
  onChange,
  onClick,
  onBlur
}: BaseInputProps): JSX.Element => {
  const inputClass = useClasses('form-input', {
    'has-error': !!error
  });
  const inputFocusRef = useInputFocus(hasFocus);

  const isTextArea = type === 'textarea';

  return React.createElement(
    isTextArea ? 'textarea' : 'input',
    {
      className: inputClass,
      defaultChecked: checked,
      defaultValue: value,
      ref: inputFocusRef,
      type,
      name: name,
      id: id || name,
      placeholder: placeholder,
      required: required,
      onChange: onChange,
      autocomplete: 'on',
      onClick: isTextArea ? null : onClick,
      onBlur: onBlur
    },
    isTextArea ? value : null
  );
};

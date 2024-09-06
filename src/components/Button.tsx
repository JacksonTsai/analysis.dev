import React from 'react';
import { ButtonProps } from '../types/buttonType';

/**
 * Button component with label, callback, disabled state, and button type.
 *
 * @param {ButtonProps} props - The properties for the button component.
 * @param {string} props.label - The text displayed inside the button.
 * @param {() => void} props.cb - The callback function triggered on button click.
 * @param {boolean} [props.disabled=false] - Optional. Controls whether the button is disabled.
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - Optional. Specifies the button type (default is 'button').
 *
 * @returns {JSX.Element} The rendered button component.
 *
 * @example
 * <Button label="Submit" cb={handleSubmit} disabled={false} type="submit" />
 */

const Button: React.FC<ButtonProps> = ({ label, cb, disabled = false, type = 'button' }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`w-[138px] rounded border bg-navy-blue px-4 py-2 text-base text-white ${disabled ? 'cursor-not-allowed text-slate-300 opacity-50' : 'hover:bg-blue-900 active:opacity-90'}`}
      onClick={cb}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;

import { ButtonProps } from '../types/buttonType';

function Button({ label, cb, disabled = false, type = 'button' }: ButtonProps) {
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
}

export default Button;

import { Controller } from 'react-hook-form';
import { TextFieldProps } from '../types/textFieldType';

/**
 * Input field component that integrates with React Hook Form.
 *
 * @param {TextFieldProps} props - The props for the input field component.
 * @param {string} props.label - The label text to display for the input field.
 * @param {string} props.name - The name of the field, used to register it with React Hook Form.
 * @param {Control} props.control - The control object from React Hook Form to manage the form state.
 * @returns {JSX.Element} The rendered input field component with label and error message handling.
 *
 */

const InputField: React.FC<TextFieldProps> = ({ label, name, control }: TextFieldProps) => {
  return (
    <div className="flex items-center gap-3.5">
      <label className="block text-base capitalize text-black">{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => {
          return (
            <div className="relative">
              <input
                className="w-[132px] rounded border border-navy-blue p-3 text-sm"
                type="text"
                value={field.value}
                onChange={field.onChange}
              ></input>
              <p className="absolute text-xs text-warm-pink">{fieldState.error && fieldState.error.message}</p>
            </div>
          );
        }}
      ></Controller>
    </div>
  );
};

export default InputField;

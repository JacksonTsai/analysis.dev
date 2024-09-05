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
const InputField = ({ name, label, value, onChange, errors = null }: TextFieldProps) => {
  return (
    <div className="flex items-center gap-3.5">
      <label className="block text-base capitalize text-black">{label}</label>

      <div className="relative">
        <input
          className="border-navy-blue w-[132px] rounded border p-3 text-sm"
          type="text"
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
        ></input>
        <p className="text-warm-pink absolute text-xs">{errors![name]}</p>
      </div>
    </div>
  );
};

export default InputField;

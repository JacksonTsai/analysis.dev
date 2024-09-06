import { Controller } from 'react-hook-form';
import { TextFieldProps } from '../types/textFieldType';

function InputField({ label, name, control }: TextFieldProps) {
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
              <p className="text-warm-pink absolute text-xs">{fieldState.error && fieldState.error.message}</p>
            </div>
          );
        }}
      ></Controller>
    </div>
  );
}

export default InputField;

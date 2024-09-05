export type TextFieldProps = {
  value: string | number;
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: TextFieldError | null;
};

export type TextFieldError = {
  [key: string]: string;
};

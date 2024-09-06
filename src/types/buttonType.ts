export type ButtonProps = {
  label: string;
  type?: 'button' | 'submit';
  cb?: () => void;
  disabled?: boolean;
};

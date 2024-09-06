import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

function Card({ children }: Props) {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg border border-slate-300 bg-white">
      <div className="p-8">{children}</div>
    </div>
  );
}

export default Card;

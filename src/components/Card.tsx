import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

function Card({ children }: Props) {
  return <div className="inline-block rounded-lg border border-slate-300 bg-white p-8">{children}</div>;
}

export default Card;

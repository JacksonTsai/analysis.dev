import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

/**
 * Card component that displays its children inside a styled container.
 *
 * @param {Props} props - The props for the card component.
 * @param {ReactNode} [props.children] - Optional. The content to display inside the card.
 * @returns {JSX.Element} The rendered card component with styled container.
 *
 * @example
 * <Card>
 *   <p>This is some content inside the card.</p>
 * </Card>
 */

const Card = ({ children }: Props) => {
  return <div className="inline-block rounded-lg border border-slate-300 bg-white p-8">{children}</div>;
};

export default Card;

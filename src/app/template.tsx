import '@/shared/styles/globals.css';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Template = ({ children }: Readonly<Props>) => {
  return <>{children}</>;
};

export default Template;

import '@/shared/styles/globals.css';
import type { ReactNode } from 'react';
import { RootLayout } from '@/widgets';

interface Props {
  children: ReactNode;
}

const Template = ({ children }: Readonly<Props>) => {
  return <RootLayout>{children}</RootLayout>;
};

export default Template;

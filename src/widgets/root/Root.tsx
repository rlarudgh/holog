import { RecoilRoot } from 'recoil';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<Props>) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RootLayout;

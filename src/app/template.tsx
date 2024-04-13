'use client';

import type { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface Props {
  children: ReactNode;
}

const Template = ({ children }: Readonly<Props>) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Template;

import type { ReactNode } from 'react';
import * as s from './block.css';

type WithChildren = { children?: ReactNode };

export const BlockMain = ({ children }: WithChildren) => <div className={s.main}>{children}</div>;

export const BlockHero = ({ children }: WithChildren) => <div className={s.hero}>{children}</div>;

export const BlockTitle = ({ children }: WithChildren) => <h3 className={s.title}>{children}</h3>;

export const BlockLabel = ({ children }: WithChildren) => <h3 className={s.label}>{children}</h3>;

export const BlockHeading = ({ children }: WithChildren) => (
  <div className={s.heading}>{children}</div>
);

export const BlockFooter = ({ children }: WithChildren) => (
  <div className={s.footer}>{children}</div>
);

export const BlockImage = ({ children }: WithChildren) => <div className={s.image}>{children}</div>;

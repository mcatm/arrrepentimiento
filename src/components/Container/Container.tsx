import * as s from './style.css';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={s.container}>{children}</div>;
};

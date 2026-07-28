import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
  children: ReactNode;
  className?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
};

const isExternal = (to: string) => /^https?:\/\//.test(to) || to.startsWith('//');

// Mirrors Nuxt's <nuxt-link>: internal paths use the router, external URLs
// render a plain anchor (opening in a new tab when not explicitly overridden).
export default function SmartLink({ to, children, className, target }: Props) {
  if (isExternal(to)) {
    return (
      <a href={to} className={className} target={target ?? '_blank'} rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className} target={target}>
      {children}
    </Link>
  );
}

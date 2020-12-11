import React, { PropsWithChildren, memo } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  ...props
}) => {
  const { asPath } = useRouter();
  const child = React.Children.only(children);
  const childClassName = (child as any).props?.className || '';

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} border-blue-600`
      : childClassName;

  return (
    <NextLink {...props}>
      {React.isValidElement(children) &&
        React.cloneElement(children, {
          className: className || null,
        })}
    </NextLink>
  );
};

export default memo(Link);

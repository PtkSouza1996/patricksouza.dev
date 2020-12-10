import React, { memo } from 'react';

interface IProps {
  condition: boolean | any;
  children: React.ReactNode;
}

const If: React.FC<IProps> = ({ children, condition }) => {
  if (Boolean(condition)) {
    return <>{children}</>;
  }

  return null;
};

export default memo(If);

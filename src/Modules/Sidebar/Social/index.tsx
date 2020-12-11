import React, { memo } from 'react';
import contacts from './data';
import { If } from '../../../Shared';

const Social: React.FC = () => {
  return (
    <ul className="flex w-full justify-center md:justify-start flex-wrap md:flex-col my-4">
      {contacts.map(({ url, icon: Icon, text }, index) => (
        <li
          className="flex md:flex-1 items-center fill-current text-gray-500 text-sm leading-7 whitespace-nowrap "
          key={index}
        >
          <div className="min-w-4 min-h-4">
            <Icon />
          </div>
          <If condition={url}>
            <a
              href={url}
              className=" px-2 transition ease-in duration-300 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              {text}
            </a>
          </If>
          <If condition={!url}>
            <span className=" px-2 whitespace-nowrap">{text}</span>
          </If>
        </li>
      ))}
    </ul>
  );
};

export default memo(Social);

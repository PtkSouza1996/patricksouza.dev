import React from 'react';
import Image from 'next/image';
import Social from './Social';

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-wrap md:flex-col md:items-center border-b-2 md:border-r-2 border-gray-100 border-opacity-25 w-full md:w-min pt-8 px-4 md:p-8 ">
      <div className="flex md:flex-col w-full justify-center md:justiffy-start">
        <Image
          width={12 * 16}
          height={12 * 16}
          className="rounded-lg h-16 md:h-24 w-16 md:w-24 flex items-center justify-center select-none"
          src="/patrick.png"
          alt="Patrick"
        />
      </div>
      <h4 className="text-2xl w-full text-center font-light my-4 text-gray-500">
        Patrick Souza
      </h4>
      <div className="flex items-center justify-center w-full">
        <span className="text-center text-sm font-light px-4 py-2 text-gray-600 bg-gray-100 rounded-full select-none whitespace-nowrap">
          software enginner
        </span>
      </div>
      <Social />
    </div>
  );
};

export default Sidebar;

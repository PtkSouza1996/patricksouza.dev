import React from 'react';
import Image from 'next/image';
import Social from './Social';

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col items-center border-r-2 border-gray-100 border-opacity-25 w-1/5 p-8">
      <Image
        width={12 * 16}
        height={12 * 16}
        className="rounded-lg h-24 w-24 flex items-center justify-center select-none"
        src="/patrick.png"
        alt="Patrick"
      />
      <h4 className="text-2xl font-light my-4 text-gray-500">Patrick Souza</h4>
      <div className="flex items-center justify-conter">
        <span className="text-center text-sm font-light px-4 py-2 text-gray-600 bg-gray-100 rounded-full select-none whitespace-nowrap">
          software enginner
        </span>
      </div>
      <Social />
    </div>
  );
};

export default Sidebar;

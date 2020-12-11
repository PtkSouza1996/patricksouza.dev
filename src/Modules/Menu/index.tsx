import React from 'react';
import Link from '../../Shared/Link';

const Menu: React.FC = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex pt-2 bg-white rounded-tl-lg">
        <ul className="flex align-middle cursor-pointer">
          <Link href="/">
            <li className="border-b-2 border-white transition duration-300 hover:border-blue-600 pt-1 pb-2 px-4">
              Sobre
            </li>
          </Link>
          <Link href="/experiences">
            <li className="border-b-2 border-white transition duration-300 hover:border-blue-600 pt-1 pb-2 px-4">
              Experiências
            </li>
          </Link>
          <li className="border-b-2 border-white transition duration-300 hover:border-blue-600 pt-1 pb-2 px-4">
            Blog
          </li>
          <li className="border-b-2 border-white transition duration-300 hover:border-blue-600 pt-1 pb-2 px-4">
            Contato
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

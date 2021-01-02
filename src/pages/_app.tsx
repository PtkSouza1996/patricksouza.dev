import 'tailwindcss/tailwind.css';
import React from 'react';
import Menu from '../Modules/Menu';
import Sidebar from '../Modules/Sidebar';
import 'aos/dist/aos.css';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col mx-auto xs:w-full sm:w-full md:w-4/5 xl:w-8/12  rounded-lg md:my-16 overflow-hidden">
      <Menu />
      <div className="flex flex-col md:flex-row bg-white rounded-tl-lg">
        <Sidebar />
        <div className="flex flex-col p-8 overflow-hidden">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;

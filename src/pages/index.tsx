import React from 'react';
import About from '../Modules/About';
import Sidebar from '../Modules/Sidebar';

export default function Home() {
  return (
    <div className="container flex mx-auto w-3/5 bg-white rounded-lg my-16">
      <Sidebar />
      <div className="container flex flex-col p-8">
        <About />
      </div>
    </div>
  );
}

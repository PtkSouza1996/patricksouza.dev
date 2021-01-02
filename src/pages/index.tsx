import React, { useEffect } from 'react';
import About from '../Modules/About';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({
      delay: 150,
      duration: 800,
    });
  }, []);

  return <About />;
}

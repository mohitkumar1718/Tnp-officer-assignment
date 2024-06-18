import React, { useEffect, useState } from 'react';
import useIntersectionObserver from '../utils/useIntersectionObserver';

const Footer = () => {
  const [instagramCount, setInstagramCount] = useState(0);
  const [telegramCount, setTelegramCount] = useState(0);
  const [linkedinCount, setLinkedinCount] = useState(0);
  const [containerRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    if (isVisible) {
      const targetInstagramCount = 2500;
      const targetTelegramCount = 50000;
      const targetLinkedinCount = 29000;
      const duration = 2000;

      const incrementNumber = (start, end, setState) => {
        let current = start;
        const increment = (end - start) / (duration / 100);

        const timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            current = end;
            clearInterval(timer);
          }
          setState(Math.ceil(current));
        }, 100);
      };

      incrementNumber(0, targetInstagramCount, setInstagramCount);
      incrementNumber(0, targetTelegramCount, setTelegramCount);
      incrementNumber(0, targetLinkedinCount, setLinkedinCount);
    }
  }, [isVisible]);

  return (
    <div className='text-center bg-indigo-900 pt-4 text-white'>
    <h1 className='font-bold text-4xl text-white'>VAST COMMUNITY OF STUDENTS</h1>
    <div ref={containerRef} className="flex justify-around bg-indigo-900 p-4 md:w-1/2 mx-auto">
      <div className="flex items-center justify-center  border-white border-2 rounded-full  ">
        <span className="text-lg md:text-xl font-semibold ml-5">{instagramCount.toLocaleString()} +</span>
        <img src="/instagram logo..png" alt="Instagram" className="lg:h-10 lg:w-10 h-8 w-8 ml-6" />
      </div>
      <div className="flex items-center justify-center border-white border-2 rounded-full px-4 py-2 mx-2">
        <span className="text-lg md:text-xl font-semibold">{telegramCount.toLocaleString()} +</span>
        <img src="/telegram.png" alt="Telegram" className="lg:h-10 lg:w-10 h-8 w-8" />
      </div>
      <div className="flex items-center justify-center border-white border-2 rounded-full px-4 py-2">
        <span className="text-lg md:text-xl font-semibold">{linkedinCount.toLocaleString()} +</span>
        <img src="/linkedin.png" alt="LinkedIn" className="lg:h-10 lg:w-10 h-8 w-8" />
      </div>
    </div>
    </div>
  );
};

export default Footer;

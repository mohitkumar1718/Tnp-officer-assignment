import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { instructors } from '../utils/instructors';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? instructors.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === instructors.length - 1 ? 0 : prevIndex + 1));
  };

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="max-w-6xl mx-auto p-5 mt-20 lg:mt-40 rounded-xl bg-gradient-to-r from-light-blue-50 via-white shadow-lg overflow-hidden">
      {/* upper div */}
      <div className='flex   justify-between border-b-2 border-blue-gray-700 pb-4 mb-4'>
        <div className='w-2/3'>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-indigo-900">Our Instructors</h2>
          <p className="text-base  sm:text-xl lg:text-2xl mb-8">Learn from Our Experienced and Dedicated Instructors.</p>
        </div>
        <div className='flex justify-center lg:my-auto space-x-4'>
          <button onClick={handlePrev} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button onClick={handleNext} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* lower div */}
      <div className="flex flex-col lg:flex-row justify-between text-indigo-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="flex flex-col lg:flex-row w-full "
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <img src="logo192.png" className='w-1/2 mx-auto lg:w-1/3 object-cover' alt="" />
            <div className='w-full lg:w-1/2 p-4 lg:p-8 text-center lg:text-start'>
              <h3 className="text-2xl font-bold text-indigo-900">{instructors[currentIndex].name}</h3>
              <p className="text-indigo-800 text-xl">{instructors[currentIndex].post}</p>
              <p className="text-indigo-800 mt-4 text-lg">{instructors[currentIndex].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;

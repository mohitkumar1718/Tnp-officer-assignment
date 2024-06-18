import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../utils/testimonials';



const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return testimonials.length - 3;
      } else {
        return prevIndex - 3;
      }
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + 3 >= testimonials.length) {
        return 0;
      } else {
        return prevIndex + 3;
      }
    });
  };

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="max-w-6xl mx-auto p-4 mt-20">
      <h2 className="text-5xl font-bold mb-4 text-center text-indigo-900">Testimonials</h2>
      <div className="flex flex-wrap  justify-center ">
        {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg  mx-3 shadow-lg w-62 bg-gradient-to-r from-yellow-50 to-sky-50 my-2"
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <TestimonialCard testimonial={testimonial}/>
            
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handlePrev} className="mx-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none">
          Previous
        </button>
        <button onClick={handleNext} className="mx-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none">
          Next
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

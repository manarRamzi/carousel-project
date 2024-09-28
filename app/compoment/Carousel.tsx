"use client";

import React, { useState } from 'react';
import Arrow from './Arrow';
import Slide from './Slide';

interface CarouselProps {
  slides: string[];
}

const Carousel: React.FC<CarouselProps> = ({ slides = [] }) => {
  // Ensure slides is not undefined or empty
  if (slides.length === 0) {
    return <div>No slides available</div>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      <Slide image={slides[currentIndex]} />
      <Arrow direction="left" onClick={prevSlide} />
      <Arrow direction="right" onClick={nextSlide} />
    </div>
  );
};

export default Carousel;

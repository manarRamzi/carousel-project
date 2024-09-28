import React from 'react';

interface SlideProps {
  image: string;
}

const Slide: React.FC<SlideProps> = ({ image }) => (
  <div className="w-full h-90 flex justify-center items-center">
    <img src={image} alt="slide" className="object-cover" />
  </div>
);

export default Slide;

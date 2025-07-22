import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Optional: for icons
import message from "../assets/image/Message.png"

const ImageCarousel = () => {
  const images = [
    message,
    "image2.jpg",
    "image3.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLast = currentIndex === images.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full md:w-1/2 flex justify-center relative">
      {/* Arrow Buttons */}
      <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 p-1 rounded-full hover:bg-white shadow">
        <ChevronLeft size={24} />
      </button>
      <img
        src={images[currentIndex]}
        alt="Slide"
        className="w-full max-w-full h-auto object-contain"
      />
      <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 p-1 rounded-full hover:bg-white shadow">
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ImageCarousel;

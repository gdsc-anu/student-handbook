import React, { useState } from 'react';
import './App.css';

function App() {
  const slides = [
    {
      slide: `No hustle to find updated info on campus
      Get all the info you need in one place`
    },
    {
      slide: `No hustle to find updated info on campus
      Get all the info you need in one place`
    },
    {
      slide: `No hustle to find updated info on campus
      Get all the info you need in one place`
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
      <div className='w-full h-full duration-500'>
        {/* Render Current Slide */}
        <div className="slide-container">
          <h1>{slides[currentSlideIndex].slide}</h1>
        </div>

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          <button onClick={handlePrevSlide}>Previous</button>
          <button onClick={handleNextSlide}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;

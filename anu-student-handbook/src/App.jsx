import { useState } from 'react';
import RxDotfilled from './RxDotFilled';
import './App.css';

function App() {
  const slides = [
    {
      slide: (
        <div className='flex flex-col'>
          <span>No hustle to find updated info on campus</span>
          <span style={{ fontSize: '2em', color: 'green' }}>Get all the info you need in one place</span>
        </div>
      ),
    },
    {
      slide: (
        <div>
          <span>No hustle to find updated info on campus</span>
          <span>Get all the info you need in one place yu</span>
        </div>
      ),
    },
    {
      slide: (
        <div>
          <span>No hustle to find updated info on campus</span>
          <span>Get all the info you need in one place dtt</span>
        </div>
      ),
    },
  ];
  

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className='max-w-[1400px] w-full m-auto py-16 px-4 bg-slate-50'>
      <div className='w-full duration-500 flex flex-col justify-center items-start'>
        {/* Render Current Slide */}
        <div className="slide-container">
          <h1>{slides[currentSlideIndex].slide}</h1>
        </div>

        {/* Navigation Buttons
        <div className="navigation-buttons mt-5 w-full flex justify-between items-center">
          <button 
            className='p-2 bg-slate-100 rounded-lg' 
            onClick={handlePrevSlide}
          >
            Previous
          </button>
          <button 
            className='p-2 w-20 bg-sky-100 rounded-lg'
            onClick={handleNextSlide}
          >
            Next
          </button>
        </div> */}
        </div>
        <div className='text-2xl cursor-pointer'>
          <RxDotfilled />
      </div>
      
    </div>
    
  );
}

export default App;

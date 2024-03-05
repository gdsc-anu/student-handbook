// App.jsx
// import { useState } from 'react';
// import RxDotfilled from './components/RxDotFilled';
const style = { 
  fontSize: '2.5em', 
  color: 'green', 
  fontWeight: 'bold', 
  lineHeight: '2.5rem'
}
// import slides from './components/slide';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function App() {
  // const [startX, setStartX] = useState(null);
  // const [isSwiping, setIsSwiping] = useState(false);

  // const handleTouchStart = (e) => {
  //   setStartX(e.touches[0].clientX);
  //   setIsSwiping(false);
  // };

  // const handleTouchMove = (e) => {
  //   if (!startX) return;

  //   const currentX = e.touches[0].clientX;
  //   const difference = startX - currentX;

  //   if (Math.abs(difference) > 50) {
  //     setIsSwiping(true);
  //   }
  // };

  // const handleTouchEnd = () => {
  //   if (isSwiping) {
  //     const difference = startX - window.innerWidth;

  //     if (difference > 50) {
  //       handleNextSlide();
  //     } else if (difference < -50) {
  //       handlePrevSlide();
  //     }
  //   }

  //   setStartX(null);
  //   setIsSwiping(false);
  // };

  // const handleNextSlide = () => {
  //   setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  // };

  // const handlePrevSlide = () => {
  //   setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  // };

  // const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  
  return (
    <main className='max-w-[1400px] w-full m-auto py-16 px-4 bg-slate-50'>
         <Swiper >
           <SwiperSlide>
            <div className='flex flex-col text-left'>
              <a href="/#"><p className="text-gray-400 mb-20">skip {'>'} </p></a>
              <span>No hustle to find<br/> updated info on campus 1<br/></span>
              <span style={style}>
                Get all the <br/> info you need <br/> in one place
              </span>
            </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className="flex flex-col text-right">
              <a href="/#"><p className="text-gray-400 mb-20">skip {'>'} </p></a>
              <span>No hustle to find <br/> updated info on campus 2<br/></span>
              <span style={style}>Get all the <br/>info you need <br/>in one place yu</span>
            </div>
           </SwiperSlide>
           <SwiperSlide>
              <div className="flex flex-col text-left">
              <span>No hustle to find <br/> updated info on campus 3<br/></span>
              <span style={style}>Get all the <br/>info you need <br/> in one place dtt</span>
              </div>
           </SwiperSlide>
        </Swiper>
    </main>

    // <div
    //   className='max-w-[1400px] w-full m-auto py-16 px-4 bg-slate-50'
    //   onTouchStart={handleTouchStart}
    //   onTouchMove={handleTouchMove}
    //   onTouchEnd={handleTouchEnd}
    // >
    //   <div className='w-full duration-500 flex flex-col justify-center items-start'>
    //     {/* Render Current Slide */}
    //     <div className="slide-container mx-auto">
    //       <h1>{slides[currentSlideIndex].slide}</h1>
    //     </div>
    //   </div>
    //   <div className='text-2xl cursor-pointer'>
    //     <RxDotfilled totalSlides={slides.length} currentSlideIndex={currentSlideIndex} />
    //   </div>
    //   {currentSlideIndex === slides.length - 1 && (
    //     <button className="bg-yellow-400 p-2 mt-5 rounded-full w-64 mx-auto text-xl">Getting Started</button>
    //   )}
    // </div>
  );
}

export default App;

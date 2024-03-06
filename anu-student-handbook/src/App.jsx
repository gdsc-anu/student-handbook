// App.jsx

import './App.css';
import { Swiper, SwiperSlide,  } from 'swiper/react';
import  {  Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { useState } from 'react';



function App() {
  const [swiper, setSwiper] = useState(null)
  return (
    <main className='max-w-[1400px] w-full m-auto py-16 px-4 bg-slate-50 wrapper'>
         <Swiper 
            modules={[Pagination]}
            pagination={{ clickable: true, }} // Enable pagination with clickable dots
            spaceBetween={50}
            centeredSlides={true}
            slidesPerView={1}
            onSlideChange={() => swiper?.update()}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
            onActiveIndexChange={(swiper) => {
              console.log("active index is", swiper.activeIndex);
            }}
            style={{
              "--swiper-pagination-color": "#000000",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "16px",
              "--swiper-pagination-bullet-horizontal-gap": "6px"
            }}
         >
           <SwiperSlide>
           <div className='text-left slide'>
              <div className="mx-auto flex flex-col items-center">
              <a href="/#"><p className="text-gray-400 mb-10">skip {'>'} </p></a>
              <span>No hustle to find<br/> updated info on campus 1<br/></span>
              <span style={style}>
                Get all the <br/> info you need <br/> in one place
              </span>  
              </div>  
            </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className="flex flex-col text-right  mr-10 px-5 slide">
              <a href="/#"><p className="text-gray-400 mb-10">skip {'>'} </p></a>
              <span>No hustle to find <br/> updated info on campus 2<br/></span>
              <span style={style}>Get all the <br/>info you need <br/>in one place yu</span>
            </div>
           </SwiperSlide>
           <SwiperSlide>
              <div className="flex flex-col text-left  ml-10 px-5 slide">
              <span>No hustle to find <br/> updated info on campus 3<br/></span>
              <span style={style}>Get all the <br/>info you need <br/> in one place dtt</span>
              </div>
           </SwiperSlide>
        </Swiper>
        
        
    </main>

    
  );
}

export default App;


const style = { 
  fontSize: '2.3em', 
  color: 'green', 
  fontWeight: 'bold', 
  lineHeight: '3.5rem'
}

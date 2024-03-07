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
           <div className='text-left slide div'>
              <div className="mx-auto flex flex-col">
              <a href="/#" className='mr-auto'><p className="text-gray-400 mb-10">skip {'>'} </p></a>
              <span className='mr-auto'>No hustle to find<br/> updated info on campus<br/></span>
              <span style={style}>
                Get all the <br/> info you need <br/> in one place
              </span>  
              </div>  
            </div>
           </SwiperSlide>
           <SwiperSlide>
           <div className='text-right slide div1'>
              <div className="mx-auto flex flex-col">
              <a href="/#" className='ml-auto'><p className="text-gray-400 mb-10">skip {'>'} </p></a>
              <span className='ml-auto'>No hustle to find <br/> updated info on campus<br/></span>
              <span style={style}>Get all the <br/>info you need <br/>in one place</span>
            </div>
            </div>
           </SwiperSlide>
           <SwiperSlide>
           <div className='text-left slide div'>
              <div className="mx-auto flex flex-col">
              <span className='mr-auto'>No hustle to find <br/> updated info on campus<br/></span>
              <span style={style}>Get all the <br/>info you need <br/> in one place</span>
              <button className="bg-yellow-400 p-2 mt-12 rounded-full w-64 mx-auto text-xl">Getting Started</button>
              </div>
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

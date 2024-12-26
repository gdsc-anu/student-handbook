// import Swiper core and required modules
import { Pagination, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function CustomCarousel () {
    const [swiper, setSwiper] = useState(null);
    return (
        <Swiper 
            modules={[Pagination, Virtual]}
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
               <div className="mx-auto flex flex-col ml-4 mt-3">
                    <Link to={"/homepage"} className='mr-auto'><p className="text-gray-400 mb-10 text-sm">skip {'>'} </p></Link>
                    <span className='mr-auto text-sm'>No hustle to find<br/> updated info on campus<br/></span>
                    <span className='fold-bold text-green-700 text-3xl md:text-5xl'>
                        Get all the <br/> info you need <br/> in one place
                    </span>  
               </div>  
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='text-right slide div1'>
               <div className="mx-auto flex flex-col mr-4 mt-3">
                    <Link to={"/homepage"} className='ml-auto'><p className="text-gray-400 mb-10 text-sm">skip {'>'} </p></Link>
                    <span className='ml-auto text-sm'>No hustle to find<br/> updated info on campus<br/></span>
                    <span className='fold-bold text-green-700 text-3xl md:text-5xl'>
                        Get all the <br/> info you need <br/> in one place
                    </span> 
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='text-left slide div'>
                    <div className="mx-auto flex flex-col ml-4">
                        <div className="text-gray-400 mb-10"></div>
                        <span className='mr-auto text-sm'>No hustle to find<br/> updated info on campus<br/></span>
                        <span className='fold-bold text-green-700 text-3xl md:text-5xl'>
                            Get all the <br/> info you need <br/> in one place
                        </span> 
                        <div className="bg-yellow-400 p-2 mt-12 rounded-full w-64 mx-auto text-xl cursor-pointer"> 
                            <Link to="/homepage">
                                Getting Started
                            </Link> 
                        </div>
                    </div>
                </div>
            </SwiperSlide>
    </Swiper>
  );
}
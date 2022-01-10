import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import SwipperCore, {Pagination, Navigation, EffectCards} from 'swiper';


import image1 from './assets/image1.jpeg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';

import './TestSwipper.css';

SwipperCore.use([Pagination, Navigation]);

class TestSwipper extends React.Component{
    render(){
        return(
            <Swiper 
                effect={'coverflow'} 
                centeredSlides={true} 
                slidesPerView={'auto'} 
                draggable={true}
                spaceBetween={40}
                coverflowEffect={
                    {
                        "rotate": 0,
                        "stretch": 0,
                        "depth": 200,
                        "modifier": 5,
                        "slideShadows": true
                    }
                } 
              pagination={{
                  "type": "fraction"
              }} 
              navigation={true}
              loop={'infinite'}
              className="mySwiper">
                <SwiperSlide>
                    <img src={image1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} />
                </SwiperSlide>
            </Swiper>
        );
    }
}

export default TestSwipper;
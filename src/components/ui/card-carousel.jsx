import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SparklesIcon } from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "./badge"

export const CardCarousel = ({
  images,
  autoplayDelay = 2500,
  showPagination = true,
  showNavigation = true,
  onChangeIndex,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
    padding-top: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 440px; 
    height: 680px; 
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  
  /* Make pagination dots white to match dark theme */
  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.4) !important;
  }
  .swiper-pagination-bullet-active {
    background: #ffffff !important;
  }
  
  /* Make nav arrows white instead of default blue */
  :root {
    --swiper-navigation-color: #fff;
    --swiper-navigation-size: 24px;
  }
  .swiper-button-next, .swiper-button-prev {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
  .swiper-button-next:after, .swiper-button-prev:after {
    font-size: 16px;
    font-weight: bold;
  }
  .swiper-button-next:hover, .swiper-button-prev:hover {
    background: rgba(255,255,255,0.15);
  }
  `

  return (
    <div className="w-full relative z-20">
      <style>{css}</style>
      
      {/* 
        Stripped the heavy box styling border/backgrounds 
        to cleanly integrate into the cinematic dark hero section. 
      */}
      <div className="relative mx-auto flex w-full flex-col items-center p-2">
        
        {/* Badge kept as elegant overlay */}
        <Badge
          variant="outline"
          className="absolute left-4 top-2 rounded-[14px] px-3 py-1 text-sm bg-black/40 backdrop-blur-md z-40 border-white/10 shadow-xl"
        >
          <SparklesIcon className="w-3 h-3 mr-2 text-pink-300" />{" "}
          Interactive Collection
        </Badge>
        
        <div className="flex w-full items-center justify-center -mt-4">
          <div className="w-full">
            <Swiper
              spaceBetween={20}
              autoplay={
                autoplayDelay > 0
                  ? {
                      delay: autoplayDelay,
                      disableOnInteraction: false,
                    }
                  : false
              }
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 2.5,
              }}
              pagination={showPagination ? { clickable: true } : false}
              onSlideChange={(swiper) => {
                // Modulo by images.length because we duped the array for looping seamlessly
                if (onChangeIndex) onChangeIndex(swiper.realIndex % (images.length / 2));
              }}
              navigation={showNavigation ? true : false}
              modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            >
              {/* Loop the images twice to ensure Swiper's loop handles a small array properly without visual gaps */}
              {images.map((image, index) => (
                <SwiperSlide key={`a-${index}`}>
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={image.imageSrc}
                      className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                      alt={image.title}
                    />
                  </div>
                </SwiperSlide>
              ))}
              {images.map((image, index) => (
                <SwiperSlide key={`b-${index}`}>
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={image.imageSrc}
                      className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                      alt={image.title}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

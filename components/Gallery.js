import React from 'react'
import Slider from "react-slick";

const Gallery = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 0,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 13000,
    autoplaySpeed: 0,
    cssEase: "linear"
      };
  return (
    <div className='bg-roadmap-color bg-cover'> 

        <Slider {...settings}>
          <div>
            <img className='w-full object-cover' src='/assets/preview.png' alt=''/>
          </div>
          <div>
            <img className='w-full object-cover' src='/assets/preview.png' alt=''/>
          </div>
        </Slider>

    </div>
      
  )
}

export default Gallery

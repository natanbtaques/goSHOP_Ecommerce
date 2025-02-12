import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import sliderImg_1 from '../../images/slider/sliderImg_1.jpg'
import sliderImg_2 from '../../images/slider/sliderImg_2.jpg'
import sliderImg_3 from '../../images/slider/sliderImg_3.jpg'
import sliderImg_4 from '../../images/slider/sliderImg_4.jpg'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='relative'>
      <Carousel showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop autoPlay interval={3000}>
        <div>
          <Image priority src={sliderImg_1} alt='image' />

        </div>
        <div>
          <Image src={sliderImg_2} alt='image' />

        </div>
        <div>
          <Image src={sliderImg_3} alt='image' />

        </div>
        <div>
          <Image src={sliderImg_4} alt='image' />

        </div>

      </Carousel>
      <div className='w-full h-40 bg-gradient-to-t from-gray-15 to-transparente absolute bottom-0 z-20'></div>
    </div>
  )
}

export default Banner


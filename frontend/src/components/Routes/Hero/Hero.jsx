import cover2 from '../../../assets/img/cover-image-02.png';
import cover1 from '../../../assets/img/cover-image-01.png';
import cover3 from '../../../assets/img/cover-image-03.jpg';
import { data } from '../../../static/data';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const slideImages = [cover1, cover2, cover3];

  //   const sliderContainerRef = useRef(null);
  //   const scrollToItem = (index) => {
  //     const sliderContainer = sliderContainerRef.current;
  //     const itemToScroll = sliderContainer.querySelectorAll('div')[index];
  //     itemToScroll.scrollIntoView({ behavior: 'smooth' });
  //   };

  return (
    <>
      <div className="slider-container">
        {slideImages.map((slide, index) => (
          <div key={index} className={` aspect-[16/5] slide`}>
            <img
              src={slide}
              alt="cover image"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Hero;

import s from './Slider.module.scss';
import iphone from '../../assets/iphone11.jpg';
import laptop from '../../assets/ideapad.jpg';
import tablet from '../../assets/tablet.jpeg';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useState } from 'react';

export const Slider = () => {
  const slides = [
    {
      url: iphone,
      text: 'Iphone 11',
    },
    {
      url: laptop,
      text: 'Lenovo Ideapad',
    },
    {
      url: tablet,
      text: 'Ipad 10.2',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    currentIndex < slides.length - 1 ? setCurrentIndex((prev) => ++prev) : setCurrentIndex(0);
  };
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <>
      <div className={s.sliderHeader}>OUR BESTSELLERS</div>
      <div className={s.slider}>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className={s.sliderElement}>
          <span className={s.itemName}>{slides[currentIndex].text}</span>
          <div className={s.leftArrow}>
            <BsChevronCompactLeft size={40} onClick={prevSlide} />
          </div>
          <div className={s.rightArrow}>
            <BsChevronCompactRight size={40} onClick={nextSlide} />
          </div>
        </div>
        <div className="flex justify-center">
          {slides.map((slide, index) => {
            return (
              <div className="cursor-pointer" key={`${slide}_${index}`}>
                <RxDotFilled size={40} onClick={() => goToSlide(index)} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

import React from 'react';
import s from '../Styles/Slider.module.scss';
import { EastOutlined, WestOutlined } from '@mui/icons-material';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  const dataImages = [
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://i.pinimg.com/originals/36/91/26/3691263853f01569fd87d5411cbbbe38.jpg',
    'https://media.gq.com/photos/5da0d80749acb20008f24fa7/16:9/w_2560%2Cc_limit/01-ginew-native-fashion-gq-october-101119.jpg',
  ];

  return (
    <div className={s.slider}>
      <div className={s.container} style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        <img src={dataImages[0]} alt="image1" />
        <img src={dataImages[1]} alt="image2" />
        <img src={dataImages[2]} alt="image3" />
      </div>
      <div className={s.icons}>
        <div className={s.icon} onClick={prevSlide}>
          <WestOutlined htmlColor="white" fontSize="large" />
        </div>
        <div className={s.icon} onClick={nextSlide}>
          <EastOutlined htmlColor="white" fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Slider;

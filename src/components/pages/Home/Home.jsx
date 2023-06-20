import React from 'react';
import Slider from '../../Slider/Slider';
import h from '../../Styles/Home.module.scss';
import FeaturedProducts from '../../FeaturedProducts/FeaturedProducts';
import Categories from '../../Categories/Categories';

const Home = () => {
  return (
    <div className={h.home_wrapper}>
      <Slider />
      <FeaturedProducts title="Рекомендации" />
      <Categories />
      <FeaturedProducts title="Товары в тренде" />
    </div>
  );
};

export default Home;

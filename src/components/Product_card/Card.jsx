import React from 'react';
import { Link } from 'react-router-dom';
import c from '../Styles/Card.module.scss';

const Card = ({ item }) => {
  const { title, img, img_2, price, oldPrice, id, isNew} = item;
  return (
    <Link className={c.wrapper_link} to={`/product/${id}`}>
      <div className={c.wrapper}>
        <div className={c.images}>
          {isNew ? <span>New</span> : ''}
          <img src={img} alt='img1' className={c.image1}/>
          <img src={img_2} alt='img1' className={c.image2}/>
        </div>
        <h2>{title}</h2>
        <div className={c.prices}>
          {oldPrice ? <span className={c.oldprice}>{oldPrice}₽</span> : ''}
          <span>{price}₽</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;

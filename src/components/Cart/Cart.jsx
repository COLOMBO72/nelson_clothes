import React from 'react';
import z from '../Styles/Cart.module.scss';
import { DeleteOutlineOutlined } from '@mui/icons-material';

const Cart = () => {
  const dataProducts = [
    {
      id: 1,
      title: 'Худи',
      male: 1, //1-m,2-ж
      type: '',
      price: 400,
      isNew: true,
      oldPrice: 500,
      category: 1, // 1-м,2-ж,3-д
      img: 'https://tntmusic.ru/media/content/article/2019-11-10_11-02-29__9657886e-03a9-11ea-befe-c7972ac73d9f.jpg',
      img_2: 'https://i.ytimg.com/vi/SSUagRDNugo/maxresdefault.jpg',
    },
    {
      id: 2,
      title: 'Худи',
      male: 1, //1-m,2-ж
      type: '',
      price: 400,
      isNew: false,
      category: 1, // 1-м,2-ж,3-д
      img: 'https://tntmusic.ru/media/content/article/2019-11-10_11-02-29__9657886e-03a9-11ea-befe-c7972ac73d9f.jpg',
      img_2: 'https://i.ytimg.com/vi/SSUagRDNugo/maxresdefault.jpg',
    },
  ];
  return (
    <div className={z.wrapper}>
      <h1>Корзина</h1>
      {dataProducts?.map((item) => (
        <div key={item.id} className={z.item}>
          <img src={item.img} alt="" />
          <div className={z.details}>
            <h1>{item.title}</h1>
            <div className={z.price}>1 x {item.price}</div>
          </div>
          <DeleteOutlineOutlined className={z.delete} />
        </div>
      ))}
      <div className={z.total}>
        <span>Всего</span>
        <span>1234 Р</span>
      </div>
      <button>Оформить заказ</button>
      <span className={z.reset}>Очистить корзину</span>
    </div>
  );
};

export default Cart;

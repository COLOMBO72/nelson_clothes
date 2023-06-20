import React from 'react';
import p from '../../Styles/Product.module.scss';
import { AddShoppingCart, FavoriteBorder, Balance } from '@mui/icons-material';

const Product = () => {
  const imgs = [
    'https://tntmusic.ru/media/content/article/2019-11-10_11-02-29__9657886e-03a9-11ea-befe-c7972ac73d9f.jpg',
    'https://i.ytimg.com/vi/SSUagRDNugo/maxresdefault.jpg',
  ];
  const [count, setCount] = React.useState(1);
  const [selectedImg, setSelectedImg] = React.useState(0);
  return (
    <div className={p.wrapper}>
      <div className={p.images_wrap}>
        <div className={p.imagesdop}>
          <img src={imgs[0]} alt="img" onClick={() => setSelectedImg(0)} />
          <img src={imgs[1]} alt="img" onClick={() => setSelectedImg(1)} />
        </div>
        <div className={p.mainimg}>
          <img src={imgs[selectedImg]} alt="mainImg" />
        </div>
      </div>
      <div className={p.info_wrap}>
        <h1>Title</h1>
        <span className={p.price}>10000</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum rem consequatur
          accusantium delectus unde qui consectetur magni sit tempora quia, omnis obcaecati hic
          velit, libero aspernatur eveniet praesentium blanditiis.
        </p>
        <div className={p.quant}>
          <button onClick={() => setCount((prev) => prev + 1)}>+</button>
          {count}
          <button onClick={() => setCount((prev) => (prev >= 1 ? prev - 1 : 1))}>-</button>
        </div>
        <button className={p.add}>
          <AddShoppingCart /> В корзину
        </button>
        <div className={p.links}>
          <div className={p.item}>
            <FavoriteBorder /> В избранное
          </div>
          <div className={p.item}>
            <Balance /> Сравнить
          </div>
        </div>
        <div className={p.info}>
          <span>Худи Animal</span>
          <span>Тип: худи</span>
          <span>Теги: худи, кофта, мужская, верх</span>
        </div>
        <hr />
        <div className={p.info}>
          <span>Описание</span>
          <hr />
          <span>Дополнительная информация</span>
        </div>
      </div>
    </div>
  );
};

export default Product;

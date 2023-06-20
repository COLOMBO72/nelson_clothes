import React from 'react';
import c from '../Styles/Catalog.module.scss';
import Card from '../Product_card/Card';

const Catalog = () => {
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
    {
      id: 3,
      title: 'Худи',
      male: 1, //1-m,2-ж
      type: '',
      price: 400,
      isNew: false,
      oldPrice: 700,
      category: 1, // 1-м,2-ж,3-д
      img: 'https://tntmusic.ru/media/content/article/2019-11-10_11-02-29__9657886e-03a9-11ea-befe-c7972ac73d9f.jpg',
      img_2: 'https://i.ytimg.com/vi/SSUagRDNugo/maxresdefault.jpg',
    },
    {
      id: 4,
      title: 'Худи',
      male: 1, //1-m,2-ж
      type: '',
      price: 400,
      isNew: true,
      category: 1, // 1-м,2-ж,3-д
      img: 'https://tntmusic.ru/media/content/article/2019-11-10_11-02-29__9657886e-03a9-11ea-befe-c7972ac73d9f.jpg',
      img_2: 'https://i.ytimg.com/vi/SSUagRDNugo/maxresdefault.jpg',
    },
  ];
  return (
    <div className={c.wrapper}>
      {dataProducts?.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};

export default Catalog;

import f from '../Styles/FeaturedProducts.module.scss';
import React from 'react';
import Card from '../Product_card/Card';

const FeaturedProducts = ({ title }) => {
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
    <div className={f.wrapper}>
      <div className={f.wrapper_title}>
        <h3>{title}</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, amet architecto
          consequatur ex corrupti numquam, quas rem accusamus ut repellat dolorem hic ipsam ducimus
          possimus quaerat eveniet sapiente eum totam.
        </p>
      </div>
      <div className={f.wrapper_bottom}>
        {dataProducts.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

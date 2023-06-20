import React from 'react';
import c from '../Styles/Categories.module.scss';
import { Link } from 'react-router-dom';
const Categories = () => {
  return (
    <div className={c.wrapper}>
      <div className={c.col}>
        <div className={c.row}>
          <img
            src="https://go.zvuk.com/thumb/1200x0/filters:quality(75):no_upscale()/imgs/2023/03/14/09/5832486/0063e7c7796503de2f1bb73aa66547449c9ed996.jpg"
            alt="img"
          />
          <Link className={c.link} to={'/products/0'}>
            <button>Распродажа</button>
          </Link>
        </div>
        <div className={c.row}>
          <img
            src="https://media.istockphoto.com/id/1329622588/photo/portrait-beautiful-young-woman-with-clean-fresh-skin.jpg?s=612x612&w=0&k=20&c=9AoxkXBKOdFrqddZt3_R9S0FpDFpFuPS9hGgQjoeNCo="
            alt="img"
          />
          <Link className={c.link} to={'/products/1'}>
            <button>Девушкам</button>
          </Link>
        </div>
      </div>
      <div className={c.col}>
        <div className={c.row}>
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww&w=1000&q=80"
            alt="img"
          />
          <Link className={c.link} to={'/products/4'}>
            <button>New</button>
          </Link>
        </div>
      </div>
      <div className={`${c.col_large} ${c.col}`}>
        <div className={c.row}>
          <div className={c.col}>
            <div className={c.row}>
              <img
                src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5015.jpg?w=2000"
                alt="img"
              />
              <Link className={c.link} to={'/products/2'}>
            <button>Мужчинам</button>
          </Link>
            </div>
          </div>
          <div className={c.col}>
            <div className={c.row}>
              <img
                src="https://media.istockphoto.com/id/626085868/photo/mens-accessories.webp?b=1&s=170667a&w=0&k=20&c=EHt5OBGhlIr7X1Yo24B9GQHI-BSg2Y_xtzB_rz4ZIGo="
                alt="img"
              />
             <Link className={c.link} to={'/products/5'}>
            <button>Аксессуары</button>
          </Link>
            </div>
          </div>
        </div>
        <div className={c.row}>
          <img
            src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMGJhZ3N8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt="img"
          />
          <Link className={c.link} to={'/products/6'}>
            <button>Сумки</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;

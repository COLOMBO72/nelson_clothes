import React from 'react';
import p from '../../Styles/Products.module.scss';
import { useParams } from 'react-router-dom';
import Catalog from '../../Catalog/Catalog';

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = React.useState(0);
  const [sort, setSort] = React.useState(null);
  return (
    <div className={p.wrapper}>
      <div className={p.filter}>
        <div className={p.filterItem}>
          <h2>Категории</h2>
          <div className={p.inputItem}>
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Сумки</label>
          </div>
          <div className={p.inputItem}>
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Мужчинам</label>
          </div>
          <div className={p.inputItem}>
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Девушкам</label>
          </div>
        </div>
        <div className={p.filterItem}>
          <h2>Цена</h2>
          <div className={p.inputItem}>
            <span>0</span>
            <input
              type="range"
              name="range"
              min={0}
              max={20000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className={p.filterItem}>
          <h2>Сортировка</h2>
          <div className={p.inputItem}>
            <input type="radio" id="asc" value="asc" name="price" onChange={() => setSort('asc')} />
            <label htmlFor="asc">Цена по возрастанию</label>
          </div>
          <div className={p.inputItem}>
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={() => setSort('desc')}
            />
            <label htmlFor="desc">Цена по убыванию</label>
          </div>
        </div>
      </div>
      <div className={p.catalog}>
        <img className={p.catImg} src="https://img.freepik.com/free-photo/stylish-girl-gray-pants-white-cotton-blouse-posing-near-white-wall-woman-cap-glasses_197531-15058.jpg?w=1380&t=st=1687254627~exp=1687255227~hmac=75684465ebfee98df2d5930efd1079bad7c11edfc751a8b59bbe6e7868085977" alt="" />
        <Catalog catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;

import React from 'react';
import { Link } from 'react-router-dom';
import h from '../Styles/Header.module.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Cart from '../Cart/Cart';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header>
      <div className={h.wrapper}>
        <div className={h.left}>
          <div className={h.item}>
            <Link to="/products/1">Девушкам</Link>
          </div>
          <div className={h.item}>
            <Link to="/products/2">Мужчинам</Link>
          </div>
          <div className={h.item}>
            <Link to="/products/3">Детям</Link>
          </div>
        </div>
        <div className={h.center}>
          <Link to="/">NELSON</Link>
        </div>
        <div className={h.right}>
          <div className={h.item}>
            <Link to="/about">О нас</Link>
          </div>
          <div className={h.item}>
            <Link to="/contacts">Контакты</Link>
          </div>
          <div className={h.item}>
            <Link to="/blog">Блог</Link>
          </div>
          <div className={h.icons}>
            <SearchOutlinedIcon className={h.icon} />
            <FavoriteBorderOutlinedIcon className={h.icon} />
            <PermIdentityOutlinedIcon className={h.icon} />
            <div onClick={() => setOpen(!open)} className={h.cartIcon}>
              <ShoppingCartOutlinedIcon className={h.icon} />
              <span>0</span>
            </div>
          </div>
        </div>
        {open && <Cart />}
      </div>
    </header>
  );
};

export default Header;

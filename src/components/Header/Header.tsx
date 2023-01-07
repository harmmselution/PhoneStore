import s from './Header.module.scss';
import phone from '../../assets/phone.svg';
import search from '../../assets/search.png';
import cart from '../../assets/cart.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <a href="#1">
            <img src={phone} alt="phone" className={s.img} />
          </a>
          <a className={s.logoText} href="#1">
            Mobile Store
          </a>
        </div>
        <Link to="/cart">
          <div className={s.container}>
            <div className={s.cart}>
              <img src={cart} alt="cart" />
              <div className={s.circle}>3</div>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

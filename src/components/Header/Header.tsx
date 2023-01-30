import s from './Header.module.scss';
import phone from '../../assets/phone.svg';
import cart from '../../assets/cart.svg';
import { Link } from 'react-router-dom';
import t from '../Tabs/Tabs.module.scss';
export const Header = () => {
  return (
    <header>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <a href="/">
            <img src={phone} alt="phone" className={s.img} />
          </a>
          <a className={s.logoText} href="/">
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

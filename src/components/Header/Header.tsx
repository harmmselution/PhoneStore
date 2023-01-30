import s from './Header.module.scss';
import phone from '../../assets/phone.svg';
import cart from '../../assets/cart.svg';
import { Link } from 'react-router-dom';
import t from '../Tabs/Tabs.module.scss';
import { useSelector } from 'react-redux';
export const Header = () => {
  const state = useSelector((state: any) => state.cartReducer);
  console.log(state);
  return (
    <header>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <Link to="/">
            <img src={phone} alt="phone" className={s.img} />
          </Link>
          <Link className={s.logoText} to="/">
            Mobile Store
          </Link>
        </div>
        <Link to="/cart">
          <div className={s.container}>
            <div className={s.cart}>
              <img src={cart} alt="cart" />
              <div className={s.circle}>
                {state.items.length} <br />
                total price:{state.totalPrice}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

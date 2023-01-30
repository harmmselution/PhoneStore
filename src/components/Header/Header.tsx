import s from './Header.module.scss';
import phone from '../../assets/phone.svg';
import cart from '../../assets/cart.svg';
import { Link } from 'react-router-dom';
import t from '../Tabs/Tabs.module.scss';
import { useSelector } from 'react-redux';
export const Header = () => {
  const state = useSelector((state: any) => state.cartReducer);
  const totalCount = state.items.reduce((sum: number, item: any) => sum + item.count, 0);
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
                {totalCount}
                <span className={s.price}> {state.totalPrice}$</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

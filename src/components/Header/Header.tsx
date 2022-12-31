import s from './Header.module.scss';
import phone from '../../assets/phone.svg';
import search from '../../assets/search.png';
import cart from '../../assets/cart.svg';
type Props = {};

export const Header = (props: Props) => {
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
        <div className={s.container}>
          <div className={s.searchInput}>
            <input type="text" placeholder="I'm searching..." className={s.input} />
            <div className={s.searchSvg}>
              <img src={search} alt="search" />
            </div>
          </div>
          <div className={s.cart}>
            <img src={cart} alt="cart" />
            <div className={s.circle}>3</div>
          </div>
        </div>
      </div>
    </header>
  );
};

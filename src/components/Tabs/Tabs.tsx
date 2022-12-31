import s from './Tabs.module.scss';
import search from '../../assets/search.png';

type Props = {};

export const Tabs = (props: Props) => {
  return (
    <>
      <div className="flex">
        <div className={s.searchInput}>
          <input type="text" placeholder="I'm searching..." className={s.input} />
          <div className={s.searchSvg}>
            <img src={search} alt="search" />
          </div>
        </div>
      </div>
      <div className={s.tabsWrapper}>
        <div className={s.tab}>Mobile Phones</div>
        <div className={s.tab}>Laptops</div>
        <div className={s.tab}>Tablets</div>
      </div>
    </>
  );
};

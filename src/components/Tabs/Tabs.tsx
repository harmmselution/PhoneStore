import s from './Tabs.module.scss';
type Props = {};

export const Tabs = (props: Props) => {
  return (
    <div className={s.tabsWrapper}>
      <div className={s.tab}>Mobile Phones</div>
      <div className={s.tab}>Laptops</div>
      <div className={s.tab}>Tablets</div>
    </div>
  );
};

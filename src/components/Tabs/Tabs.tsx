import s from './Tabs.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../../redux/filterSlice';
interface Props {
  category: string;
}
export const Tabs = ({ category }: Props) => {
  const dispatch = useDispatch();
  const categories = ['All', 'Laptops', 'Mobile Phones', 'Tablets'];
  return (
    <div className={s.tabsWrapper}>
      {categories.map((item, i) => (
        <div
          onClick={() => dispatch(changeCategory(categories[i]))}
          className={item === category ? s.active : s.tab}
          key={`${i}_${item}`}>
          {item}
        </div>
      ))}
    </div>
  );
};

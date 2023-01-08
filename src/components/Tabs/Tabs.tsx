import s from './Tabs.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../../redux/filterSlice';
export const Tabs = () => {
  const category: string = useSelector((state: any) => state.filterReducer.category);
  const dispatch = useDispatch();
  const categories = ['Mobile Phones', 'Laptops', 'Tablets'];
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

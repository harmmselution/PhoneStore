import { Card } from './Card';
import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { Pagination } from '../Pagination/Pagination';
import s from '../Tabs/Tabs.module.scss';
import search from '../../assets/search.png';
import { ICards } from '../Home/Home';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';

type Props = {
  currentValue: string;
  changeCurrentValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  items: ICards[];
};

export const CardsContainer: React.FC<Props> = ({ currentValue, changeCurrentValue, items }) => {
  const [value, setValue] = useState('');
  const updateSearchValue = useCallback(
    debounce((e) => {
      changeCurrentValue(e);
    }, 2000),
    [],
  );
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e);
  };
  const dispatch = useDispatch();

  const addToCart = (item: any) => {
    dispatch(addProduct(item));
  };
  return (
    <>
      <div className="flex mt-20">
        <div className={s.searchInput}>
          <input
            type="text"
            placeholder="I'm searching..."
            className={s.input}
            value={value}
            onChange={onChangeInput}
          />
          <div className={s.searchSvg}>
            <img src={search} alt="search" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 ">
        {items.map((card, index) => (
          <Card {...card} key={`${card.id}_${index}`} addToCart={() => addToCart(items[index])} />
        ))}
      </div>
      <Pagination />
    </>
  );
};

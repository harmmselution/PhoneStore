import React from 'react';
import { Tabs } from '../Tabs/Tabs';
import { Slider } from '../Slider/Slider';
import { CardsContainer } from '../Cards/CardsContainer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../../redux/filterSlice';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import { fetchItems } from '../../redux/itemsSlice';

export interface ICards {
  id: number;
  category: string;
  imageUrl: string;
  name: string;
  price: string;
}

const Home: React.FC = () => {
  const [searchValue, setCurrentValue] = useState('');
  let category: string = useSelector((state: any) => state.filterReducer.category);
  let currentPage: number = useSelector((state: any) => state.filterReducer.currentPage);
  const { allItems, status } = useSelector((state: any) => state.itemsReducer);
  const navigate = useNavigate();
  const changeCurrentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems({ category, searchValue, currentPage }));
  }, [currentPage, searchValue, category, dispatch]);

  useEffect(() => {
    const queryString = qs.stringify({
      category,
      currentPage,
    });
    navigate(`?${queryString}`);
  }, [category, currentPage]);

  return (
    <>
      <Slider />
      <Tabs category={category} />
      {status === 'success' && (
        <CardsContainer
          currentValue={searchValue}
          changeCurrentValue={changeCurrentValue}
          items={allItems}
        />
      )}
      {status === 'loading' && <div>ЗАГРУЗКА</div>}
      {status === 'error' && <div>Ошибка</div>}
    </>
  );
};
export default Home;

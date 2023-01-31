import React from 'react';
import { Tabs } from '../Tabs/Tabs';
import { Slider } from '../Slider/Slider';
import { CardsContainer } from '../Cards/CardsContainer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory, setFilters } from '../../redux/filterSlice';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import { setAllItems, fetchItems } from '../../redux/itemsSlice';

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
  const navigate = useNavigate();
  const changeCurrentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
  };
  const dispatch = useDispatch<any>();
  const items = useSelector((state: any) => state.itemsReducer.allItems);

  const getItems = async () => {
    try {
      dispatch(fetchItems({ category, searchValue, currentPage }));
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  useEffect(() => {
    getItems();
  }, [currentPage, searchValue, category]);

  // useEffect(() => {
  //   const queryString = qs.stringify({
  //     category,
  //     currentPage,
  //   });
  //   navigate(`?${queryString}`);
  // }, [category, currentPage]);
  console.log(items);
  return (
    <>
      <Slider />
      <Tabs category={category} />
      <CardsContainer
        currentValue={searchValue}
        changeCurrentValue={changeCurrentValue}
        items={items}
      />
    </>
  );
};
export default Home;

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

export interface ICards {
  id: number;
  category: string;
  imageUrl: string;
  name: string;
  price: string;
}

const Home: React.FC = () => {
  const [items, setItems] = useState<ICards[]>([]);
  const [searchValue, setCurrentValue] = useState('');
  let category: string = useSelector((state: any) => state.filterReducer.category);
  let currentPage: number = useSelector((state: any) => state.filterReducer.currentPage);
  const navigate = useNavigate();
  const changeCurrentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://63b191980d51f5b2971a66f1.mockapi.io/items?page=${currentPage}&limit=8&category=${
          category === 'All' ? '' : category
        }&search=${searchValue}`,
      )
      .then((res) => {
        setItems(res.data);
      });
  }, [currentPage, searchValue, category]);

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
      <CardsContainer
        currentValue={searchValue}
        changeCurrentValue={changeCurrentValue}
        items={items}
      />
    </>
  );
};
export default Home;

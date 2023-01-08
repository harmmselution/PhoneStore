import React from 'react';
import { Tabs } from '../Tabs/Tabs';
import { Slider } from '../Slider/Slider';
import { CardsContainer } from '../Cards/CardsContainer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
export interface ICards {
  id: number;
  category: string;
  imageUrl: string;
  name: string;
  price: string;
}

const Home: React.FC = () => {
  const [items, setItems] = useState<ICards[]>([]);
  const [currentValue, setCurrentValue] = useState('');
  const [currentPage, setPage] = useState(1);
  const category: string = useSelector((state: any) => state.filterReducer.category);
  console.log(category);
  const changeCurrentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.currentTarget.value);
  };
  const setCurrentPage = (num: number) => {
    setPage(num);
  };
  useEffect(() => {
    axios
      .get(
        `https://63b191980d51f5b2971a66f1.mockapi.io/items?page=${currentPage}&limit=8&search=${currentValue}&category=${category}`,
      )
      .then((res) => {
        setItems(res.data);
      });
  }, [currentPage, currentValue, category]);
  return (
    <>
      <Slider />
      <Tabs category={category} />
      <CardsContainer
        currentValue={currentValue}
        changeCurrentValue={changeCurrentValue}
        items={items}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
export default Home;

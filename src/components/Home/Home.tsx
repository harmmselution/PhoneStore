import React from 'react';
import { Tabs } from '../Tabs/Tabs';
import { Slider } from '../Slider/Slider';
import { CardsContainer } from '../Cards/CardsContainer';

const Home = () => {
  return (
    <>
      <Slider />
      <Tabs />
      <CardsContainer />
    </>
  );
};
export default Home;

import { Card } from './Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Pagination } from '../Pagination/Pagination';
import s from '../Tabs/Tabs.module.scss';
import search from '../../assets/search.png';
import { ICards } from '../Home/Home';

type Props = {
  currentValue: string;
  changeCurrentValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  items: ICards[];
  setCurrentPage: (num: number) => void;
};

export const CardsContainer: React.FC<Props> = ({
  currentValue,
  changeCurrentValue,
  items,
  setCurrentPage,
}) => {
  return (
    <>
      <div className="flex mt-20">
        <div className={s.searchInput}>
          <input
            type="text"
            placeholder="I'm searching..."
            className={s.input}
            value={currentValue}
            onChange={changeCurrentValue}
          />
          <div className={s.searchSvg}>
            <img src={search} alt="search" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 ">
        {items.map((card, index) => (
          <Card {...card} key={`${card.id}_${index}`} />
        ))}
      </div>
      <Pagination onChangePage={setCurrentPage} />
    </>
  );
};

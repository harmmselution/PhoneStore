import { Card } from './Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Pagination } from '../Pagination/Pagination';
import s from '../Tabs/Tabs.module.scss';
import search from '../../assets/search.png';
type Props = {};
interface ICards {
  id: number;
  category: string;
  imageUrl: string;
  name: string;
  price: string;
}
export const CardsContainer: React.FC<Props> = (props) => {
  const [items, setItems] = useState<ICards[]>([]);
  console.log(items);
  const [currentValue, setCurrentValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://63b191980d51f5b2971a66f1.mockapi.io/items?page=${currentPage}&limit=8&search=${currentValue}`,
      )
      .then((res) => {
        setItems(res.data);
      });
  }, [currentPage, currentValue]);

  return (
    <>
      <div className="flex mt-20">
        <div className={s.searchInput}>
          <input
            type="text"
            placeholder="I'm searching..."
            className={s.input}
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
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
      <Pagination onChangePage={(number: number) => setCurrentPage(number)} />
    </>
  );
};

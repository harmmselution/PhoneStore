import { Card } from './Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Pagination } from '../Pagination/Pagination';
type Props = {};
interface ICards {
  id: number;
  category: string;
  imageUrl: string;
  name: string;
  price: string;
}
export const CardsContainer = (props: Props) => {
  const [items, setItems] = useState<ICards[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    axios
      .get(`https://63b191980d51f5b2971a66f1.mockapi.io/items?page=${currentPage}&limit=8`)
      .then((res) => {
        setItems(res.data);
      });
  }, [currentPage]);
  console.log(currentPage);
  return (
    <>
      <div className="flex pt-20 flex-wrap gap-4 justify-center">
        {items.map((card, index) => (
          <Card {...card} key={`${card.id}_${card.name}`} />
        ))}
      </div>
      <Pagination onChangePage={(number: number) => setCurrentPage(number)} />
    </>
  );
};

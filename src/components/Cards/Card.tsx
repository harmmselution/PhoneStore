import s from './Card.module.scss';
import { addProduct } from '../../redux/cartSlice';
import { ICards } from '../Home/Home';

type Props = {
  id: number;
  category: string;
  imageUrl: string;
  name: string;
  price: string;
  addToCart: () => void;
};

export const Card = ({ name, category, id, imageUrl, price, addToCart }: Props) => {
  return (
    <div className={s.card}>
      <img src={imageUrl} alt="phone" />
      <div className="text-center">{name}</div>
      <div className="text-center">{price}$</div>
      <div
        className="text-center bg-red-900  text-white rounded-xl p-[12px] mb-4 cursor-pointer"
        onClick={addToCart}>
        add to basket
      </div>
    </div>
  );
};

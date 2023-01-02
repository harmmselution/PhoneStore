import s from './Card.module.scss';
type Props = {
  id: number;
  category: string;
  imageUrl: string;
  name: string;
};

export const Card = ({ name, category, id, imageUrl }: Props) => {
  return (
    <div className={s.card}>
      <img src={imageUrl} alt="phone" />
      <div className="text-center">{name}</div>
      <div className="text-center bg-red-900  text-white rounded-xl p-[12px] mb-4 cursor-pointer">
        add to basket
      </div>
    </div>
  );
};

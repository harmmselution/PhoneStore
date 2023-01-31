import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, clearCart, decreaseProducts, addProduct } from '../../redux/cartSlice';
import s from './Cart.module.scss';
type Props = {};

const Cart: React.FC = (props: Props) => {
  const state = useSelector((state: any) => state.cartReducer);

  const dispatch = useDispatch();
  const removeItem = (index: number) => {
    if (window.confirm('Are you sure you want to remove this item?'))
      dispatch(removeProduct(index));
  };
  const clearAllItems = () => {
    if (window.confirm('Are you sure you want to clear the cart?')) dispatch(clearCart());
  };

  return (
    <div className="flex justify-center flex-col ">
      <div className="text-white text-center mb-8" onClick={clearAllItems}>
        очистить карзину
      </div>
      <div className={s.cardContainer}>
        {state.items.map((obj: any, index: number) => {
          return (
            <div className={s.card}>
              <div className="flex h-[140px] items-center ">
                <img src={obj.imageUrl} alt="phone" className="h-[108px] w-[108px]" />
                <h1 className="text-center">{obj.name}</h1>
              </div>
              <div className="flex justify-between gap-6 ">
                <button
                  className={s.minus}
                  onClick={() => dispatch(decreaseProducts(obj.id))}
                  disabled={obj.count <= 0}>
                  -
                </button>
                <div className="text-center">{obj.count > 0 ? obj.count : 0}</div>
                <button className={s.plus} onClick={() => dispatch(addProduct(obj))}>
                  +
                </button>
              </div>
              <div className="flex gap-20 ">
                <div className="text-center">
                  {obj.price * obj.count > 0 ? obj.price * obj.count : 0}$
                </div>
              </div>
              <div className="justify-self-end" onClick={() => removeItem(obj.id)}>
                X
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;

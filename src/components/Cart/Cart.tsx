import React from 'react';
import { useSelector } from 'react-redux';
type Props = {};

const Cart: React.FC = (props: Props) => {
  const state = useSelector((state: any) => state.cartReducer.items);
  console.log(state);
  return (
    <div className="">
      <div className="">
        {state.map((obj: any) => {
          return <li>{obj.category}</li>;
        })}
      </div>
    </div>
  );
};

export default Cart;

/* eslint-disable jsx-a11y/scope */
import Button from '@mui/material/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { utils } from '../../helpers';
import {
  addToCart,
  decreaseCart,
  removeCart,
} from '../../redux/Reducers/todoCart';

const { formatMoney } = utils;

export default function OrderItem(props) {
  const dispatch = useDispatch();
  const item = props.data;
  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };
  const handleDecrease = () => {
    dispatch(decreaseCart(item));
  };
  const removeCartItem = () => {
    dispatch(removeCart(item));
  };
  return (
    <tr>
      <td className="table-close-btn">
        <Button onClick={removeCartItem} variant="contained" color="error" className="mt-4">
          <i class="fas fa-times"></i>
        </Button>
      </td>
      <td scope="row">
        <img src={item.food_img} alt="img" style={{ maxWidth: 100 }} />
      </td>
      <td className="item-name">
        <div className="details mt-3 pd-3">
          <h3>{item.name}</h3>
        </div>
      </td>
      <td>
        <h3 className="mt-3 pd-3">{formatMoney(item.price)}</h3>
      </td>
      <td className="table-quantity">
        <form>
          <div className="quantity buttons_added d-flex justify-content-between mt-4">
            <Button
              onClick={handleDecrease}
              variant="contained"
              color="success"
            >
              <i class="fas fa-minus"></i>
            </Button>
            <h4 style={{ paddingInline: '10px' }}>{item.cartQuantity}</h4>
            <Button
              onClick={handleAddToCart}
              variant="contained"
              color="success"
            >
              <i class="fas fa-plus"></i>
            </Button>
          </div>
        </form>
      </td>
      <td>
        <h3 className="mt-3 pd-3">{formatMoney(item.totalPriceItem)}</h3>
      </td>
    </tr>
  );
}

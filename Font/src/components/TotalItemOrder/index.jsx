import React from 'react';
import Button from '@mui/material/Button';
import './style.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { utils } from '../../helpers';

const { formatMoney } = utils;

export default function TotalItemOrder() {
  const total = useSelector((state) => state.todoCart.total);
  return (
    <div className="col-lg-4 order-area">
      <div className="order-cart-area">
        <div className="order-cart">
          <h5>Tổng giỏ hàng</h5>
          <p>
            Thành tiền<span>{formatMoney(total)}</span>
          </p>
        </div>
        <Button
          color="warning"
          variant="contained"
          className="btn w-100"
          disabled={total === 0 ? true : false}
        >
          <Link className="order-checkout-btn" to="/checkout">
            Thanh toán
          </Link>
        </Button>
      </div>
    </div>
  );
}

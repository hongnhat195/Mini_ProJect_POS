import React from 'react';
import './Checkout.scss';
import CheckoutForm from '../../../components/CheckoutForm';
import CheckoutCart from '../../../components/CheckoutCart';

function Checkout(props) {
  return (
    <div className="checkout">
      <div className="text-center checkout__title">
        <i className="fas fa-clipboard-check checkout__title__icon"></i>
        Xác nhận đơn hàng
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CheckoutForm />
          </div>
          <div className="col-md-6">
            <CheckoutCart />
          </div>
        </div>
      </div>
    </div>
  );
}

Checkout.propTypes = {};

export default Checkout;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePaymentMethod } from '../../../redux/Reducers/paymentMethod';
import './PaymentMethod.scss';

function PaymentMethod(props) {
  const dispatch = useDispatch();
  const [method, setMethod] = useState('momo');
  const handleChangeMethod = (e) => {
    dispatch(changePaymentMethod(e.target.id));
    setMethod(e.target.id);
  };
  return (
    <div className="card payment-method">
      <div className="payment-method__header">
        <div>Phương thức thanh toán</div>
      </div>
      <div>
        <div className="card-body payment-method__body">
          <div className="payment-method__item">
            <input
              type="radio"
              name="payment-method"
              id="momo"
              value={method}
              checked={method === 'momo'}
              onChange={handleChangeMethod}
            />
            <label htmlFor="momo">
              <div className="d-inline-block" style={{ width: 45 }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png"
                  alt="zalo-pay-icon"
                  height="25px"
                />
              </div>
              Momo
            </label>
          </div>
          <div className="payment-method__item">
            <input
              type="radio"
              name="payment-method"
              id="zalopay"
              value={method}
              checked={method === 'zalopay'}
              onChange={handleChangeMethod}
            />
            <label htmlFor="zalopay">
              <div className="d-inline-block" style={{ width: 45 }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/vi/7/77/ZaloPay_Logo.png"
                  alt="zalo-pay-icon"
                  width="40px"
                />
              </div>
              ZaloPay
            </label>
          </div>
          <div className="payment-method__item">
            <input
              type="radio"
              name="payment-method"
              id="shopeepay"
              value={method}
              checked={method === 'shopeepay'}
              onChange={handleChangeMethod}
            />
            <label htmlFor="shopeepay">
              <div className="d-inline-block" style={{ width: 45 }}>
                <img
                  src="https://seeklogo.com/images/S/shopee-pay-logo-2217CDC100-seeklogo.com.png"
                  alt="zalo-pay-icon"
                  width="40px"
                />
              </div>
              ShopeePay
            </label>
          </div>
          <div className="payment-method__item">
            <input
              type="radio"
              name="payment-method"
              id="paypal"
              value={method}
              checked={method === 'paypal'}
              onChange={handleChangeMethod}
            />
            <label htmlFor="paypal">
              <div className="d-inline-block" style={{ width: 45 }}>
                <img
                  src="https://timo.vn/wp-content/uploads/paypal-784404_1280.png"
                  alt="paypal-pay-icon"
                  height="25px"
                  width="40px"
                />
              </div>
              Paypal
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

PaymentMethod.propTypes = {};

export default PaymentMethod;

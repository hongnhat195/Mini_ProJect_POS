import React from 'react';
import { useDispatch } from 'react-redux';
import './RemoveCart.scss';
import { deleteCart } from '../../../redux/Reducers/todoCart';
import { useHistory } from 'react-router-dom';

function RemoveCart(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  
  const handleDeleteCart = () => {
    dispatch(deleteCart());
    history.push('/');
  };
  return (
    <div className="text-center pt-2">
      <button className="remove-cart" onClick={handleDeleteCart}>
        <i className="fas fa-trash" /> <span>Xóa đơn hàng</span>
      </button>
    </div>
  );
}

RemoveCart.propTypes = {};

export default RemoveCart;

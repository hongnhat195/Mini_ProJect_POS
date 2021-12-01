import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/Reducers/todoCart';
import { utils } from '../../helpers';

const { formatMoney } = utils;

export default function FoodItem(props) {
  const item = props.item;
  const linkToDetail = `detail/${item.id}`;
  const dispatch = useDispatch();
  const addtoCart = () => {
    dispatch(addToCart(item));
  };
  return (
    <div className=" mb-5 col-5 ">
      <div className="food-card bg-white rounded-lg overflow-hidden mb-4 shadow">
        <div className="food-card_img position-relative">
          <img src={item.food_img} alt="img" />
          <a href="#!">
            <i className="far fa-heart" />
          </a>
        </div>
        <div className="food-card_content">
          <div className="food-card_title-section overflow-hidden">
            <h4 className="food-card_title">
              <a href="#!" className="text-dark">
                <Link to={linkToDetail}> {item.name} </Link>
              </a>
            </h4>
            <div className="d-flex justify-content-between">
              <h2
                style={{ fontSize: 30, fontWeight: 'bold', marginTop: 10 }}
                className="food-card_author"
              >
                {item.type}
              </h2>
              <div className="rating-box">
                <Rating
                  style={{ fontSize: 30, marginTop: 10 }}
                  name="read-only"
                  value={5}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="food-card_bottom-section">
            <div className="d-flex justify-content-between">
              <div>
                <span className="fa fa-fire" /> 220 - 280 Kcal
              </div>
              <div>
                <span className="badge badge-success">Veg</span>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <div className="food-card_price">
                <span> {formatMoney(item.price)}</span>
              </div>
              <div className="food-card_order-count">
                <Button
                  onClick={() => addtoCart()}
                  sx={{ fontSize: 10 }}
                  style={{ width: 120 }}
                  color="warning"
                  variant="contained"
                >
                  Thêm sản phẩm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

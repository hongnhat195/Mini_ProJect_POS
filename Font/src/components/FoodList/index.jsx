import React, { useEffect, useState } from "react";
import FoodItem from "../FoodItem";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchCart } from "../../redux/Reducers/todoCart";
import Skelection from "../Skelection";
import Pagination from "../Pagination";
export default function FoodList() {
  const [loading, setLoading] = useState(false);
  const listCart = useSelector((state) => state.todoCart.listCart);
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 6,
    perpage: 4,
    start: 0,
    total: listCart.length,
    showPrevButton: false,
    showFirstPageButton: false,
    showNextButton: false,
    showLastPageButton: false,
  });
  const fetchListCart = async () => {
    const res = await axios.post(
      "https://project1952001.herokuapp.com/api/v1/food/getListFoodbyName"
    );
    dispatch(fetchCart(res.data));
    await setLoading(true);
  };
  useEffect(() => {
    fetchListCart();
  }, []);
  useEffect(() => {
    console.log("ListCart: ", listCart);
  }, [loading]);
  // useEffect(() => {}, [pagination]);
  return loading === true ? (
    <div className="flex-wrap mt-5 d-flex justify-content-between align-item-center ">
      {listCart.slice(pagination.start, pagination.perpage).map((item, key) => (
        <FoodItem item={item} key={key} />
      ))}
      <Pagination
        pagination={pagination}
        listCart={listCart}
        setPagination={setPagination}
      />
    </div>
  ) : (
    <Skelection />
  );
}

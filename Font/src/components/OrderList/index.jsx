import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import OrderItem from "../OrderItem";
import TotalItemOrder from "../TotalItemOrder";
import "./style.css";
export default function OrderList() {
  const CartItem = useSelector((state) => state.todoCart.cartItem);
  // const [state, setState] = useState(CartItem);
  console.log(CartItem);
  useEffect(() => {}, [CartItem]);
  return (
    <div>
      <div className="cart-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="table-responsive mb-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="blank" />
                      <th className="blank" />
                      <th className="title-name">Sản phẩm</th>
                      <th scope="col">Giá</th>
                      <th scope="col">Số lượng</th>
                      <th>Tổng tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CartItem.map((item, index) => {
                      return <OrderItem key={index} data={item} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-8"></div>
            <TotalItemOrder />
          </div>
        </div>
      </div>
    </div>
  );
}

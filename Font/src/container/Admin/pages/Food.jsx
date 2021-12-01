import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import Pagination from "../../../components/Pagination";

const Foods = () => {
  const [listcate, setCategory] = useState([]);
  const [listFood, setlistFood] = useState([]);
  const [newFood, setnewFood] = useState({
    name: "",
    category_id: "",
    food_img: "",
    price: "",
    description: "",
    active: "true",
  });
  const { name, category_id, food_img, price, description, active } = newFood;
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 3,
    perpage: 4,
    start: 0,
    total: listFood.length,
    showPrevButton: false,
    showFirstPageButton: false,
    showNextButton: false,
    showLastPageButton: false,
  });
  const handleInputChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setnewFood({ ...newFood, [name]: value });
    console.log(
      newFood.name +
        ", " +
        newFood.category_id +
        "," +
        newFood.food_img +
        ", " +
        newFood.price +
        ", " +
        newFood.description +
        "," +
        newFood.status
    );
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/api/v1/food/addFood`, newFood, {
      headers: {
        token: JSON.parse(localStorage.getItem("admin")).token,
      },
    });
    alert("Thêm thành công");
    setnewFood({
      name: "",
      category_id: "",
      food_img: "",
      price: "",
      description: "",
      active: "true",
    });
    fetchListFood();
  };

  const fetchListCategory = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/category/getListCategory`
      );
      setCategory(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("fail to get listcategory", error.message);
    }
  };
  useEffect(() => {
    fetchListCategory();
  }, []);
  const fetchListFood = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/food/getListFood`
      );
      setlistFood(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("fail to get listfood", error.message);
    }
  };
  useEffect(() => {
    fetchListFood();
  }, []);

  useEffect(() => {}, [listFood]);
  useEffect(() => {}, [listcate]);

  const deleteRecord = async (id) => {
    await axios
      .delete(`http://localhost:5000/api/v1/food/deleteFood/${id}`, {
        headers: {
          token: JSON.parse(localStorage.getItem("admin")).token,
        },
      })
      .then((result) => {
        alert("Xoá thành công");
        fetchListFood();
      })
      .catch(() => {
        alert("Error in the Code");
      });
  };
  return (
    <div>
      <h2 className="page-header">Quản lí món</h2>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card__header1">
              <h3>Quản lí món</h3>
            </div>
            <div className="card__body">
              <form>
                <div className="form-group">
                  <lable>Tên món</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                  ></input>
                </div>
                <div className="form-group">
                  <lable>Mã danh mục</lable>
                  <select
                    className="form-control"
                    name="category_id"
                    value={category_id}
                    onChange={handleInputChange}
                  >
                    {listcate.map((item, i) => {
                      return (
                        <option key={i} value={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group">
                  <lable>UrlImage</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="food_img"
                    value={food_img}
                    onChange={handleInputChange}
                  ></input>
                </div>
                <div className="form-group">
                  <lable>FoodImage</lable>
                  <input
                    type="file"
                    className="form-control"
                    name="food_img"
                    accept=".pnd,.jpg"
                  ></input>
                </div>
                <div className="form-group">
                  <lable>Giá</lable>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={price}
                    onChange={handleInputChange}
                  ></input>
                </div>
                <div className="form-group">
                  <lable>Mô tả</lable>
                  <textarea
                    className="form-control"
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <lable>Trạng thái</lable>
                  <select
                    className="form-control"
                    name="active"
                    value={active}
                    onChange={handleInputChange}
                  >
                    <option value="true">Sử dụng</option>
                    <option value="false">Ngưng sử dụng</option>
                  </select>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="buttonform"
                      onClick={handleAdd}
                    >
                      Thêm
                    </button>
                  </div>
                </div>
              </form>{" "}
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card__header1">
              <h3>Danh sách món</h3>
            </div>
            <div className="input-group mb-4 mt-3">
              <div className="form-outline">
                <input
                  type="text"
                  id="form1"
                  className="form-control"
                  placeholder="Tìm kiếm"
                  style={{ backgroundColor: "#ececec" }}
                />
              </div>
              <button type="button" className="btn btn-success">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
            <div className="card__body">
              <div>
                <div>
                  <table>
                    <thead>
                      <tr>
                        <td>Mã món</td>
                        <td>Tên món</td>
                        <td>Mã danh mục</td>
                        <td>Giá</td>
                        <td>Mô tả</td>
                        <td>Trạng thái</td>
                        <td>Xoá/Sửa</td>
                      </tr>
                    </thead>
                    <tbody>
                      {listFood
                        .slice(pagination.start, pagination.perpage)
                        .map((item) => (
                          <tr key={item.index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.category_id}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>
                              {item.active === true
                                ? "Sử dụng"
                                : "Ngưng sử dụng"}
                            </td>
                            <td>
                              <button
                                onClick={() => {
                                  const confirmBox = window.confirm(
                                    "Bạn chắc chắn muốn xoá " + item.name
                                  );
                                  if (confirmBox === true) {
                                    deleteRecord(item.id);
                                  }
                                }}
                              >
                                <i
                                  className="far fa-trash-alt"
                                  style={{
                                    fontSize: "18px",
                                    marginRight: "5px",
                                  }}
                                ></i>
                              </button>
                              <Link
                                className=" mr-2"
                                to={`/admin/editFood/${item.id}`}
                              >
                                <i
                                  className="fa fa-edit"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="locatepage col-6">
              <Pagination
                pagination={pagination}
                listCart={listFood}
                setPagination={setPagination}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;

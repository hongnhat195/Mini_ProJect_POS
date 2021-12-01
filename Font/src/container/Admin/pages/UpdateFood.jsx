import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const Foods = () => {
  let history = useHistory();
  const { id } = useParams();
  const [listcate, setCategory] = useState([]);
  const [newFood, setnewFood] = useState({
    name: "",
    category_id: "",
    food_img: "",
    price: "",
    description: "",
    active: "true",
  });
  const [file, setFile] = useState();
  const { name, category_id, food_img, price, description, active } = newFood;
  const handleInputChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setnewFood({ ...newFood, [name]: value });
    console.log(
      id +
        "," +
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
        newFood.active
    );
  };
  const fetchListCategory = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/category/getListCategory`
      );
      setCategory(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("fail to get listCategory", error.message);
    }
  };
  useEffect(() => {
    fetchListCategory();
  }, []);
  const handelupdateFood = async (e) => {
    e.preventDefault();
    console.log(newFood);
    await axios.put(
      `http://localhost:5000/api/v1/food/updateFood/${id}`,
      newFood,
      {
        headers: {
          token: JSON.parse(localStorage.getItem("admin")).token,
        },
      }
    );
    alert("Cập nhật thành công");
    setnewFood({
      name: "",
      category_id: "",
      food_img: "",
      price: "",
      description: "",
      active: "true",
    });
    history.push("/admin/foods");
  };
  const loadnewFood = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/food/detail/${id}`
      );
      setnewFood(res.data);
    } catch (error) {
      console.log("fail to get detail", error.message);
    }
  };
  const handleImg = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("food-img", file);
    await axios.post(
      `http://localhost:5000/api/v1/food/uploadImg/${id}`,
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          token: JSON.parse(localStorage.getItem("admin")).token,
        },
      }
    );
  };
  useEffect(() => {
    loadnewFood();
  }, []);
  return (
    <div>
      <h2 className="page-header">Quản lí món</h2>
      <div className="row">
        <div className="col-5">
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
                      onClick={handelupdateFood}
                    >
                      Cập nhật
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <form className="card">
            <div className="card__header1">
              <h3>Upload ảnh cho món ăn</h3>
            </div>
            <div className="card__body">
              <input
                onChange={handleImg}
                type="file"
                id="myFile"
                name="filename"
              />
              <input />
              <input
                onClick={handleUpload}
                className="buttonform"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Foods;

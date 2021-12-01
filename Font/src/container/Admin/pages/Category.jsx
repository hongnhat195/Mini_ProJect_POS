import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";
import Pagination from "../../../components/Pagination";
export default function Categorys() {
  const [listcate, setCategory] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 3,
    perpage: 4,
    start: 0,
    total: listcate.length,
    showPrevButton: false,
    showFirstPageButton: false,
    showNextButton: false,
    showLastPageButton: false,
  });
  const [search, setSearch] = useState("");

  const [newCate, setnewCate] = useState({
    name: "",
    img_url: "",
  });
  const { name, img_url } = newCate;
  const handleInputChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setnewCate({ ...newCate, [name]: value });
    console.log(newCate.name + ", " + newCate.img_url);
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
  useEffect(() => {}, [listcate]);

  const handleAdd = async (e) => {
    e.preventDefault();
    // e.target.reset();clear field input
    await axios.post(
      "http://localhost:5000/api/v1/category/addCategory",
      newCate,
      {
        headers: {
          token: JSON.parse(localStorage.getItem("admin")).token,
        },
      }
    );
    alert("Thêm thành công");
    setnewCate({
      name: "",
      img_url: "",
    });
    fetchListCategory();
  };
  //search function
  const searchRecords = () => {
    alert(search);
    axios
      .get(`http://localhost:5000/api/v1/employee/searchRecord/${search}`)
      .then((response) => {
        setCategory(response.data);
      });
  };
  const deleteRecord = async (id) => {
    await axios
      .delete(`http://localhost:5000/api/v1/category/deleteCategory/${id}`, {
        headers: {
          token: JSON.parse(localStorage.getItem("admin")).token,
        },
      })
      .then((res) => {
        setCategory(res.data);
      })
      .catch(() => {
        alert("Error in the Code");
      });
  };
  return (
    <div>
      <h2 className="page-header">Quản lí doanh mục</h2>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card__header1">
              <h3>Quản lí doanh mục</h3>
            </div>
            <div className="card__body">
              <form action="" autoComplete="off">
                <div className="form-group">
                  <lable>Tên danh mục</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                  ></input>
                </div>
                <div className="form-group">
                  <lable>UrlImage</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="img_url"
                    value={img_url}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <lable>CategoryImage</lable>
                  <input
                    type="file"
                    className="form-control"
                    name="food_img"
                    accept=".png,.jpg"
                  ></input>
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
              </form>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card__header1">
              <h3>Danh sách danh mục</h3>
            </div>
            <div className="input-group mb-4 mt-3">
              <div className="form-outline">
                <input
                  type="text"
                  id="form1"
                  onChange={(e) => setSearch(e.target.value)}
                  className="form-control"
                  placeholder="Tìm kiếm"
                  style={{ backgroundColor: "#ececec" }}
                />
              </div>
              <button
                type="button"
                onClick={searchRecords}
                className="btn btn-success"
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
            <div className="card__body">
              <div>
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <td>Mã danh mục</td>
                        <td>Tên danh mục</td>
                        <td>Xoá / Sửa</td>
                      </tr>
                    </thead>
                    <tbody>
                      {listcate
                        .slice(pagination.start, pagination.perpage)
                        .map((item) => (
                          <tr key={item.index} style={{ textAlign: "left" }}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
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
                                {" "}
                                <i
                                  className="far fa-trash-alt"
                                  style={{
                                    fontSize: "18px",
                                    marginRight: "5px",
                                  }}
                                ></i>{" "}
                              </button>
                              <Link
                                className=" mr-2"
                                to={`/admin/editCategory/${item.id}`}
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
                listCart={listcate}
                setPagination={setPagination}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

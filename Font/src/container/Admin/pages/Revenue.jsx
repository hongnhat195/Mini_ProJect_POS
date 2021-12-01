import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

import DitgitRevenue from "../../../components/ditgit-revenue/DitgitRevenue";
import ditgitRevenues from "../../../assets/JsonData/ditgit-revenue.json";
import Pagination from "../../../components/Pagination";
import axios from "axios";
import "./style.css";

const Revenue = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);
  const [ditgit, setDegit] = useState(false);
  const [day, setDay] = useState({
    date: "",
  });
  const [data, setData] = useState([]);
  const [checkdata, setCheckdata] = useState(false);
  const chartOptions = {
    series: [
      {
        name: "Doanh thu theo tháng",
        data: data,
      },
    ],
    options: {
      color: ["#6ab04c", "#2980b9"],
      chart: {
        background: "transparent",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      grid: {
        show: false,
      },
    },
  };
  const fetChart = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/v1/analyst/totalByMonth"
    );
    let dataarray = [];
    res.data.forEach((element) => {
      dataarray.push(element.count);
    });
    setData(dataarray);
    console.log(res.data);
    setCheckdata(true);
  };
  useEffect(() => {}, [checkdata]);
  useEffect(() => {
    fetChart();
  }, []);
  const [listBillToday, setListBillToday] = useState([]);
  const [listBillOfDate, setListBillOfDate] = useState([]);
  const handleInputChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setDay({ ...day, [name]: value });
  };
  const { date } = day;
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    perpage: 10,
    start: 0,
    total: listBillToday.length,
    showPrevButton: false,
    showFirstPageButton: false,
    showNextButton: false,
    showLastPageButton: false,
  });
  const [pagination1, setPagination1] = useState({
    page: 1,
    limit: 10,
    perpage: 10,
    start: 0,
    total: listBillOfDate.length,
    showPrevButton: false,
    showFirstPageButton: false,
    showNextButton: false,
    showLastPageButton: false,
  });
  const fetRevenue = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/v1/analyst/totalByDate"
    );
    ditgitRevenues.forEach((revenue, index) => {
      revenue.count = res.data[index].count;
    });
    setDegit(true);
  };
  useEffect(() => {
    fetRevenue();
  }, []);
  useEffect(() => {}, [ditgit]);

  const fetchListBillToday = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/order/listallordertoday`
      );
      setListBillToday(res.data);
    } catch (error) {
      console.log("fail to get listBillToday", error.message);
    }
  };
  useEffect(() => {
    fetchListBillToday();
  }, []);
  useEffect(() => {}, [listBillToday]);
  useEffect(() => {}, [listBillOfDate]);
  const fetchListbyDate = async (e) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/order/listallorderbydate/${day.date}`
      );
      setListBillOfDate(res.data);
      setDay({ date: "" });
    } catch (error) {
      console.log("fail to get listBillMonth", error.message);
    }
  };
  useEffect(() => {
    fetchListbyDate();
  }, []);
  useEffect(() => {}, [listBillOfDate]);
  return (
    <div>
      <h2 className="page-header">Quản lí doanh thu</h2>
      <div className="row">
        <div className="col-5">
          <div className="row">
            {ditgitRevenues.map((item, index) => (
              <div className="col-12" key={index}>
                <DitgitRevenue
                  title={item.title}
                  icon={item.icon}
                  count={item.count}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-7">
          <div className="card full-height">
            <Chart
              options={
                themeReducer === "theme-mode-dark"
                  ? {
                      ...chartOptions.options,
                      theme: { mode: "dark" },
                    }
                  : {
                      ...chartOptions.options,
                      theme: { mode: "light" },
                    }
              }
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__header">
              <h3>Danh sách hoá đơn trong ngày</h3>
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
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <td>Ngày thanh toán</td>
                        <td>Tổng tiền</td>
                        <td>Phương thức thanh toán</td>
                        <td>Chi tiết</td>
                      </tr>
                    </thead>
                    <tbody>
                      {listBillToday
                        .slice(pagination.start, pagination.perpage)
                        .map((item) => (
                          <tr key={item.index} style={{ textAlign: "left" }}>
                            <td>{item.order_date.slice(0, 10)}</td>
                            <td>{item.total_amount}</td>
                            <td>{item.payment_method}</td>
                            <td> </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="locatepage col-4">
              <Pagination
                pagination={pagination}
                listCart={listBillToday}
                setPagination={setPagination}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__header">
              <h3>Danh sách hoá đơn trong tháng</h3>
            </div>
            <form action="" autoComplete="off">
              <div className="input-group mb-4 mt-3">
                <div className="form-outline">
                  <input
                    type="date"
                    id="form1"
                    className="form-control"
                    name="date"
                    value={date}
                    placeholder="Tìm kiếm"
                    style={{ backgroundColor: "#ececec" }}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    fetchListbyDate();
                  }}
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </form>
            <div className="card__body">
              <div>
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <td>Ngày thanh toán</td>
                        <td>Tổng tiền</td>
                        <td>Phương thức thanh toán</td>
                        <td>Chi tiết</td>
                      </tr>
                    </thead>
                    <tbody>
                      {listBillOfDate
                        .slice(pagination1.start, pagination1.perpage)
                        .map((item) => (
                          <tr key={item.index} style={{ textAlign: "left" }}>
                            <td>{item.order_date.slice(0, 10)}</td>
                            <td>{item.total_amount}</td>
                            <td>{item.payment_method}</td>
                            <td> </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="locatepage col-4">
              <Pagination
                pagination={pagination1}
                listCart={listBillOfDate}
                setPagination={setPagination1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;

import React, { useEffect } from "react";
import "./style.css";
export default function Pagination(props) {
  console.log("props", props);
  const listCart = props.listCart;
  const pagination = props.pagination;
  const setPagination = props.setPagination;
  const numberOfPages = Math.ceil(listCart.length / pagination.limit);
  const navigateToPage = (pageNumber) => {
    setPagination({
      ...pagination,
      page: pageNumber,
      start: (pageNumber - 1) * pagination.limit,
      perpage: pageNumber * pagination.limit,
    });
  };
  useEffect(() => {
    navigateToPage(1);
  }, []);
  return (
    // <h1>123</h1>
    <div className="row page-button ">
      <div className="col-8 "></div>
      <div className="col-4  d-flex flex-row">
        {pagination.page > 2 && (
          <button className="btn pagebtn" onClick={() => navigateToPage(1)}>
            First
          </button>
        )}
        {pagination.page > 1 && (
          <button
            className="btn pagebtn"
            onClick={() => navigateToPage(pagination.page - 1)}
          >
            Prev
          </button>
        )}
        {[...Array(100)].slice(0, numberOfPages).map((x, i) => (
          <button className="btn pagebtn" onClick={() => navigateToPage(i + 1)}>
            {i + 1}
          </button>
        ))}
        {pagination.page !== numberOfPages && (
          <button
            className="btn pagebtn"
            onClick={() => navigateToPage(pagination.page + 1)}
          >
            Next
          </button>
        )}
        {pagination.page < Math.ceil(numberOfPages / 2 + 1) && (
          <button
            className="btn pagebtn"
            onClick={() => navigateToPage(numberOfPages)}
          >
            Last
          </button>
        )}
      </div>
    </div>
  );
}
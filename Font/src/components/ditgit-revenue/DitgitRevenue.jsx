import React from "react";

import "./ditgitrevenue.css";

const DitgitRevenue = (props) => {
  console.log(props);
  return (
    <div className="ditgit-revenue">
      <div className="ditgit-revenue__icon">
        <i className={props.icon}></i>
      </div>
      <div className="ditgit-revenue__info">
        <h4>{props.count}</h4>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default DitgitRevenue;

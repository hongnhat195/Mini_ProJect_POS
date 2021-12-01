import * as React from "react";
import "./style.css";
import Banner2 from "../../assets/banner2.png";
import Banner3 from "../../assets/banner3.png";
import Banner4 from "../../assets/banner4.png";

export default function Slide() {
  return (
    <div className="d-flex flex-column banner-home-slider">
      <img src={Banner2} alt="banner2" />
      <img src={Banner3} alt="banner3" />
      <img src={Banner4} alt="banner4" />
    </div>
  );
}

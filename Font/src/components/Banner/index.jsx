import React from "react";
import Banner1 from "../../assets/banner1.png";
export default function Banner() {
  return (
    <div style={{ position: "relative" }}>
      <img className="w-100" src={Banner1} alt="banner1" />
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "5%",
        }}
      >
        <h4
          style={{
            fontSize: 56,
            fontWeight: 400,
            fontFamily: "Satisfy",
          }}
        >
          Double Cheese
        </h4>
        <h1
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "#ce2829",
            lineHeight: "120px",
          }}
        >
          BURGER{" "}
        </h1>
        <p style={{ fontSize: 18, lineHeight: "33px", maxWidth: "100%" }}>
          With Free Cocacola. Stay home , we deliver
        </p>
      </div>
    </div>
  );
}

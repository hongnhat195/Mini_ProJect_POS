import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../../redux/Reducers/todoCart";
import axios from "axios";
export default function SearchFood() {
  const [name, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/v1/food/getListFoodbyName",{ name });
    console.log("text: ", res.data);
    dispatch(fetchCart(res.data));
  };
  return (
    <Paper
      component="form"
      sx={{
        height: "55px",
        marginTop: "5px",
        display: "flex",
        alignItems: "center",
        width: 400,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Tìm kiếm sản phẩm"
        onChange={handleChange}
      />
      <IconButton
        onClick={handleSubmit}
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

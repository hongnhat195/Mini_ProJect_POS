import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { fetchCart } from "../../redux/Reducers/todoCart";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function SortingFood() {
  const listCart = useSelector((state) => state.todoCart.listCart);
  const dispatch = useDispatch();
  const [age, setAge] = React.useState("");
  const handleChange = async (event) => {
    event.preventDefault();
    if(event.target.value == ""){
      const res = await axios.post(
        "http://localhost:5000/api/v1/food/getListFoodbyName"
      );
      dispatch(fetchCart(res.data));
    }
    else if(event.target.value == "SortASC"){
      const res = await axios.get(
        "http://localhost:5000/api/v1/food/getListFoodByPriceASC"
      );
      dispatch(fetchCart(res.data));
    }
    else if(event.target.value == "SortDESC"){
      const res = await axios.get(
        "http://localhost:5000/api/v1/food/getListFoodByPriceDESC"
      );
      dispatch(fetchCart(res.data));
    }
    setAge(event.target.value);
  };
  useEffect(() => {}, [age]);
  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          defaultValue = "Default"
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Sắp xếp</em>
          </MenuItem>
          <MenuItem value={"SortASC"}>Giá tăng dần</MenuItem>
          <MenuItem value={"SortDESC"}>Giá giảm dần</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
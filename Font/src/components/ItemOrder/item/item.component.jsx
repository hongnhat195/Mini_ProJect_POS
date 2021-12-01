import React, { useState, useEffect } from "react";
import { useStyles } from "./item.style.component";
import { Avatar, Grid } from "@mui/material";
import axios from "axios";

function Item(props) {
  const classes = useStyles();

  const item = props.item;

  const [food, setFood] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    food_img: "",
    quantity_order: 0,
    active: false,
    category_id: 0,
    createdAt: "",
    updatedAt: "",
  });

  const getFoodDetail = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5000/api/v1/food/detail/${item.food_id}`
      );
      setFood(result.data);
      console.log(result.data);
    } catch (error) {}
  };

  useEffect(() => {
    getFoodDetail();
  }, []);

  console.log(food);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid className={classes.item} item xs={1}>
          {item.food_id}
        </Grid>
        <Grid className={classes.item} item xs={4}>
          {food.name}
        </Grid>
        <Grid className={classes.item} item xs={2}>
          <Avatar src={food.food_img} alt={food.name}></Avatar>
        </Grid>
        <Grid className={classes.item} item xs={2}>
          {item.quantity}
        </Grid>
        <Grid className={classes.item} item xs={3}>
          {item.total_amount} vnd
        </Grid>
      </Grid>
    </div>
  );
}

export default Item;

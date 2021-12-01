import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import Skelection from "../../../components/Skelection";
import { utils } from "../../../helpers";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/Reducers/todoCart";

const { formatMoney } = utils;

export default function DetailFood(props) {
  const dispatch = useDispatch();
  const [valueRating, setValueRating] = useState(0);
  const [stateFood, setFood] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = props.match.params;

  const fetchDetailFood = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/v1/food/detail/${id}`
    );
    // console.log('result ' + res);
    setFood(res.data);
    setLoading(true);
  };
  const handleAddToCart = () => {
    dispatch(addToCart(stateFood));
  };
  useEffect(() => {
    fetchDetailFood();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      {!loading ? (
        <Skelection />
      ) : (
        <div className="shop-details-area pd-top-100 mt-5 mb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <img src={stateFood.food_img} alt="img" />
              </div>
              <div className="col-md-6">
                <div>
                  <h2
                    style={{
                      fontSize: "50px",
                      fontWeight: "600",
                      marginBottom: "20px",
                    }}
                  >
                    {stateFood.name}
                  </h2>
                  <div className="row">
                    <div className="col-md-6">
                      <h4
                        style={{
                          float: "left",
                          fontSize: "30px",
                        }}
                        class="price"
                      >
                        {formatMoney(stateFood.price)}
                      </h4>
                    </div>
                    <div className="col-md-6">
                      <Rating
                        style={{
                          float: "right",
                          fontSize: "30px",
                        }}
                        name="half-rating-read"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                      />
                    </div>
                  </div>
                  <p
                    className="mt-3"
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    {stateFood.description}
                  </p>
                  <Button
                    onClick={handleAddToCart}
                    style={{
                      padding: "10px 50px 10px 50px",
                    }}
                    color="success"
                    variant="outlined"
                  >
                    Add To Cart
                  </Button>
                </div>
                <br />
                <br />
                <br />
                <h3
                  style={{
                    fontSize: "30px",
                  }}
                  className="mb-5"
                >
                  Add Your Feedback Here
                </h3>
                <div className="row">
                  <div className="col-8">
                    <Box
                      sx={{
                        width: "100%",
                        maxWidth: "100%",
                      }}
                    >
                      <TextField
                        color="warning"
                        style={{
                          width: "100%",
                        }}
                        id="outlined-multiline-static"
                        multiline
                        rows={10}
                        placeholder="Add Your Comment"
                      />
                    </Box>
                  </div>
                  <div className="col-4 float-right">
                    <Typography
                      className="mb-5"
                      style={{
                        fontSize: "20px",
                        marginTop: "-23px",
                      }}
                      component="legend"
                    >
                      Choose your rating
                    </Typography>
                    <Rating
                      style={{
                        fontSize: "30px",
                      }}
                      name="half-rating"
                      value={valueRating}
                      onChange={(_event, newValue) => {
                        setValueRating(newValue);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { useStyles } from "./ItemOrder.style.component";
import { Grid, Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Modal from "@mui/material/Modal";
import Item from "./item/item.component";

function ItemOrder(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const order = props.order;

  const orderitems = order.OrderItems;
  return (
    <div className={classes.root}>
      <Grid container spacing={2} rowSpacing={1}>
        <Grid item xs={1}>
          {order.id}
        </Grid>
        <Grid item xs={3}>
          {order.order_date.slice(0, 10)}
        </Grid>
        <Grid item xs={3}>
          {order.total_amount} vnd
        </Grid>
        <Grid item xs={4}>
          {order.payment_method}
        </Grid>
        <Grid item xs={1}>
          <Button title="Chi tiết" onClick={handleOpen}>
            <MoreVertIcon />
          </Button>
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={classes.modal}>
          <h3>Thông tin đơn hàng</h3>
          <div className={classes.head}>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                ID
              </Grid>
              <Grid item xs={4}>
                Name
              </Grid>
              <Grid item xs={2}>
                Image
              </Grid>
              <Grid item xs={2}>
                Số lượng
              </Grid>
              <Grid item xs={3}>
                Giá
              </Grid>
            </Grid>
          </div>
          <div className={classes.items}>
              {
                  orderitems.map((item, index) => {
                      return (
                          <Item item={item}/>
                      )
                  })
              }
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ItemOrder;

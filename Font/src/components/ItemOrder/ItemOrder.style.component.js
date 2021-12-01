import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "50px",
    width: "95%",
    // borderRadius: '35px',
    // boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
    margin: "20px 20px",
    backgroundColor: "#eeeeeeee",
    "& button": {
      minWidth: "30px",
      height: "30px",
      borderRadius: "15px",
      color: "#555",
    },
  },
  modal: {
    height: "700px",
    width: "700px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
  },
  head: {
    margin: '30px 0px',
    padding: '0 20px',
    height: "50px",
    width: "100%",
    boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
  },
  items: {
    height: "530px",
    width: "100%",
    border: "1px solid #ddd",
  },
}));

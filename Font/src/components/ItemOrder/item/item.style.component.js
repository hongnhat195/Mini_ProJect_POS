import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        margin: '10px 0px',
        padding: '0 20px',
        height: "50px",
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#eeeeeeee',
    },
    item: {
        height: '50px',
        display: 'flex',
        alignItems: 'center',
    }
}))
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        
        width: '100%',
    },
    flexBox: {
        height: '900px',
        width: '100%',
    },
    box: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    boxleft: {
        width: '30%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    boxright: {
        width: '70%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        backgroundColor: 'white',
        boxShadow: "0 10px 30px 0 #1976d250",
        height: '600px',
        width: '90%',
        borderRadius: '10px',
        textAlign: 'center',
    },
    avtbox: {
        height: '60px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        transform: 'translateY(-50px)',
        position: 'relative',
    },
    avt: {
        position: 'absolute',
        height: '100px',
        width: '100px',
        border: '2px solid #ddd',
        borderRadius: '50%',
        backgroundColor: 'white',
        boxShadow: "0 10px 30px 0 #1976d250",
    },
    boxTabs: {
        borderTop: '1px solid #ddd',
        borderBottom: '1px solid #ddd',
    },
    mainBox: {
        width: '100%',
        height: '600px',
        '& h3': {
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '30px',
        }
    },
    item: {
        width: '100%',
        textAlign: 'left',
        display: 'flex',
        height: '60px',
        alignItems: 'center',
    },
    leftitem: {
        width: '25%',
        fontWeight: '550',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
    },
    rightitem: {
        width: '75%',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        '& input': {
            height: '40px',
            width: '100%',
            border: 'none',
            outline: 'none',
            backgroundColor: '#eee',
            borderRadius: '20px',
            padding: '20px',
        },
        '& button': {
            height: 40,
            width: 150,
            borderRadius: '20px',
            boxShadow: "0 10px 30px 0 #1976d250",
        }
    },
    radio: {
        display: 'flex',
        alignItems: 'center',
    },
    listorder: {
        width: '100%',
        height: '500px',
        overflowY: 'scroll',
    },
    headerorder: {
        height: '50px',
        width: '95%',
        margin: '20px 20px',
        boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
    }
}))
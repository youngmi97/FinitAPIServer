import React from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Launches from '../components/Home_Login_AppBar';
import { Paper, MuiThemeProvider, Container, Box, Button} from '@material-ui/core';
import { createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
}));


const theme = createMuiTheme({
    palette: {
        background: {
            default: "#ffffff"
        }
    }
});
const StyledButton = withStyles({
    root: {
        color: 'white',
        backgroundColor : '#7610EB',
        fontSize: '1rem',
        paddingLeft : 20,
        paddingRight : 20,
    },
    label: {
        fontSize: '3',
        textTransform: 'capitalize',
    },
})(Button);

export default function Home_Local() {
    const classes = useStyles();
    return (
        <MuiThemeProvider theme={theme}>
            {/* <AppBar position="fixed">
                <Launches />
            </AppBar> */}
            <Box display='flex' justifyContent="center" alignItems="center" css={{ height: 600 }}>
                <StyledButton>
                    Get Started
                </StyledButton>
            </Box>
        </MuiThemeProvider>

    );
}

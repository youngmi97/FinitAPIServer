import React from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Launches from '../components/Home_Login_AppBar';
import { Paper, MuiThemeProvider, Container, Box, Button, Typography, Avatar, TextField } from '@material-ui/core';
import { createMuiTheme } from "@material-ui/core/styles";
import { Link, LinkProps } from 'react-router-dom';

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
const StyledButton1 = withStyles({
    root: {
        color: '#7610EB',
        fontSize: '0.8rem',
        marginTop:'4px',
        paddingLeft : 5,
        paddingRight : 5,
    },
    label: {
        fontSize: '3',
        textTransform: 'capitalize',
    },
})(Button);

const PurpleTextTypography1 = withStyles({
    root: {
        marginTop: '48px',
        color: "#7610EB"
    }
})(Typography);

const PurpleTextTypography2 = withStyles({
    root: {
        marginTop: '10px',
        color: "#7610EB"
    }
})(Typography);
const TextTypography1 = withStyles({
    root: {
        marginTop: '20px',
        color: "#000000"
    }
})(Typography);

const TextTypography2 = withStyles({
    root: {
        marginTop: '16px',
        color: "#000000"
    }
})(Typography);

const TextTypography3 = withStyles({
    root: {
        marginTop: '20px',
        color: "grey",
    }
})(Typography);
const TextTypography4 = withStyles({
    root: {
        marginTop: '10px',
        color: "grey",
    }
})(Typography);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '100px',
        marginLeft: '496px',
        '& > *': {
            width: '448px',
            height: '500px',
        },
    },
}));

export default function Home_Local() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper variant="outlined">
                <Box display="flex" justifyContent="center" >
                    <PurpleTextTypography1 display='fixed' className={classes.title} variant="h6" noWrap>
                        surPlus
            </PurpleTextTypography1>
                </Box>
                <Box display="flex" justifyContent="center" >
                    <TextTypography1 display='fixed' className={classes.title} variant="h6" noWrap>
                        Welcome Back.
            </TextTypography1>
                </Box>
                <Box display="flex" justifyContent="center" >
                    <TextTypography2 display='fixed' className={classes.title} variant="subtitle2" noWrap>
                        Stay on top of yout subscriptions with Surplus.
            </TextTypography2>
                </Box>
                <Box display="flex" justifyContent="center" marginTop="24px">
                    <Box p={1}>
                        <Avatar variant='circle' src="Facebook.svg" />
                    </Box>
                    <Box p={1}>
                        <Avatar variant='circle' src="Google New.svg" />
                    </Box>
                    <Box p={1}>
                        <Avatar variant='circle' src="Apple.svg" />
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                    <TextTypography3 display='fixed' className={classes.title} variant="subtitle2" noWrap>
                        OR
            </TextTypography3>
                </Box>
                <Box display="flex" justifyContent="center">
                    <TextField
                        id="outlined-textarea"
                        label="Email or Phone"
                        placeholder="Placeholder"
                        multiline
                        size='small'
                        variant="outlined"
                        fullWidth
                        style={{ marginLeft: '41px', marginRight: '41px', marginTop: '16px' }}
                    />
                </Box>
                <Box display="flex" justifyContent="flex_start" marginLeft='41px' marginRight='41px'>
                    <PurpleTextTypography2 display='fixed' className={classes.title} variant="subtitle2" noWrap>
                        Forgot your email?
                </PurpleTextTypography2>
                </Box>
                <Box display="flex" marginLeft='41px' marginTop='30px'>
                    <Box margin='0px'>
                        <TextTypography4 display='fixed' className={classes.title} variant="subtitle2" noWrap>
                            Not a member?
                </TextTypography4>
                    </Box>
                    <Box marginLeft='5px'><StyledButton1
                    {...{ to: '/register' }}
                    component={Link}>
                        Create One
                    </StyledButton1>
                    </Box>
                <Box marginLeft='64px'>
                <StyledButton
                    {...{ to: '/' }}
                    component={Link}>
                        Continue
                    </StyledButton>
                </Box>
                </Box>
            </Paper>
        </div>

    );
}

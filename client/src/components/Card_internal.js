import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from 'reactstrap';
import { IconButton } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 186,
        height: 186,
    },
    media: {
        height: 186,
    },
    overlay: {
        position: 'absolute',
        top: '0%',
        left: '75%',
        color: 'white',
    },
    ListItemSize: {
        marginLeft: 10,
        '& span, & svg': {
            fontSize: '1rem'
        }
    },
    ListItemSize2: {
        marginLeft: 20,
        '& span, & svg': {
            fontSize: '0.7rem'
        }
    },
    ListItemSize3: {
        fontSize: '0.5rem'
    },
    ListItemSize4: {
        marginLeft: 20,
        '& span, & svg': {
            fontSize: '0.7rem',
            color: 'gray'
        },
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    Buttoncolor : {
        color:'#800080'
    },
}));

export default function Card_internal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <Paper>
            <Card className={classes.root}>
                <CardActionArea>


                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        className={classes.list}
                    >
                        <ListItem button>
                            <Grid container spacing={0}
                                align="center"
                                justify="center"
                                direction="row">
                                <Grid item xs>
                                    <Avatar variant='square' className={classes.small} src="Netflix_small.png" />
                                </Grid>
                                <Grid item xs>
                                    <ListItemText className={classes.ListItemSize} primary="Netflix" />
                                </Grid>
                                <Grid item xs>
                                </Grid>

                            </Grid>
                        </ListItem>
                        <ListItemText className={classes.ListItemSize2} primary="TeamPlan" />
                        <ListItemText className={classes.ListItemSize2} primary="USD $12.00" />
                        <br />
                        <ListItemText className={classes.ListItemSize4} primary="Monthly Payment" />
                    </List>
                    <div align='center'>
                        <Button size="small" variant="outlined" className={classes.ListItemSize3} onClick={handleToggle}>View Details</Button>
                        <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                            <Paper>
                                <List
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                    className={classes.list}
                                >
                                    <ListItem button>
                                        <Grid container spacing={0}
                                            align="center"
                                            justify="center"
                                            direction="row">
                                            <Grid item xs>
                                                <Avatar variant='square' className={classes.small} src="Netflix_small.png" />
                                            </Grid>
                                            <Grid item xs>
                                                <ListItemText className={classes.ListItemSize} primary="Netflix" />
                                            </Grid>
                                            <Grid item xs>
                                            </Grid>

                                        </Grid>
                                    </ListItem>
                                    <ListItemText className={classes.ListItemSize2} primary="TeamPlan" />
                                    <ListItemText className={classes.ListItemSize2} primary="USD $12.00" />
                                    <br />
                                    <ListItemText className={classes.ListItemSize4} primary="Monthly Payment" />
                                </List>
                            </Paper>

                        </Backdrop>
                    </div>
                    <div className={classes.overlay}>
                        <IconButton variant='outlined' className={classes.Buttoncolor}>
                            <PeopleIcon />
                        </IconButton>
                    </div>
                </CardActionArea>
            </Card>
        </Paper>

    );
}

import React from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import ToggleOffIcon from '@material-ui/icons/ToggleOn';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import EventNoteIcon from '@material-ui/icons/EventNote';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



const drawerWidth = 240;
const drawerWidth2 = 300;


const StyledButton = withStyles({
    root: {
        color: 'purple',
        fontSize: '0.5rem',

    },
    label: {
        fontSize: '3',
        textTransform: 'capitalize',
    },
})(Button);


const AntTabs = withStyles({
    root: {
    },
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        fontSize: 10,
        inlineSize: 10,
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$selected': {
            color: '#800080',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    icon_root: {
        flexGrow: 1,
        maxWidth: 500,
    },
    list: {
        maxWidth: 200,
        backgroundColor: theme.palette.background.paper,
        blockSize: 5,
    },
    grow: {
        flexGrow: 1,
    },
    demo1: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        height: 10,
    },
    appBar2: {
        width: `calc(100%)`
    },
    customizeToolbar: {
        marginTop: 10,
        minHeight: 5,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawer2: {
        width: drawerWidth2,
        flexShrink: 0,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.05),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.10),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        fontSize: 10,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    searchIcon: {
        padding: theme.spacing(2, 0),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawerPaper: {
        marginTop: 170,
    },
    drawerPaper2: {
        width: drawerWidth2,
        top: 200,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    paperContainer: {
        backgroundImage: `url(${"Rectangle4.png"})`,
        height: 260,
        width: 1440,
    },
    ListItemSize: {
        '& span, & svg': {
            fontSize: '1rem'
        }
    },
    ListItemSize2: {
        '& span, & svg': {
            fontSize: '0.5rem'
        }
    },
    ListItemSize3: {
        fontSize: '0.5rem'
    },
}));

export default function List_item() {
    const classes = useStyles();
    return (
        <div className={classes.drawerContainer}>
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.list}
        >
            <ListSubheader component="div" id="nested-list-subheader">
                JULY
                    </ListSubheader>
            <ListItem button>
                <ListItemIcon>
                    <AppsIcon />
                </ListItemIcon>
                <ListItemText primary="All subscriptions" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Solo subscriptions" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Group subscriptions" />
            </ListItem>

        </List>
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    CATEGORIES
                        </ListSubheader>
            }
            className={classes.list}
        >
            <ListItem button>
                <ListItemIcon>
                    <TvIcon />
                </ListItemIcon>
                <ListItemText primary="Streaming" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <SportsEsportsIcon />
                </ListItemIcon>
                <ListItemText primary="Gaming" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <HeadsetIcon />
                </ListItemIcon>
                <ListItemText primary="Music" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <BrushIcon />
                </ListItemIcon>
                <ListItemText primary="Create" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary="Work" />
            </ListItem>

        </List>
        </div>
    );
}
import React from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Launches from './Launches';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import TvIcon from '@material-ui/icons/Tv';
import BrushIcon from '@material-ui/icons/Brush';
import DescriptionIcon from '@material-ui/icons/Description';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import HeadsetIcon from '@material-ui/icons/Headset';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import SearchIcon from '@material-ui/icons/Search';
import SwapIcon from '@material-ui/icons/SwapVerticalCircleOutlined';
import Card_content from './Card_content';




const drawerWidth = 240;
const drawerWidth2 = 300;


const StyledButton = withStyles({
    root: {
      color: 'purple',
      fontSize:'0.5rem',
      
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
      fontSize : 10,
      inlineSize:10,
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
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
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
    fontSize : 10,
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
    width: drawerWidth,
  },
  drawerPaper2: {
    width: drawerWidth2,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container>
        <Grid item xs={10}>
            <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Launches/>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
                
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"

                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                        SUBSCRIPTIONS
                        </ListSubheader>
                    }
                    className={classes.list}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <AppsIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "All subscriptions"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Solo subscriptions"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <GroupIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Group subscriptions"/>
                    </ListItem>
                    
                </List>
                <Divider />
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
                            <TvIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Streaming"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SportsEsportsIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Gaming"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <HeadsetIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Music"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <BrushIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Create"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DescriptionIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Work"/>
                    </ListItem>
                    
                </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.grow}>    
                <Toolbar/>
                <Toolbar>
                <AntTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="ant example"
                    indicatorColor = 'white'
                >
                    <AntTab icon={<ViewListIcon/> }/>
                    <AntTab icon={<ViewModuleIcon />}/>
                </AntTabs>
                <div className={classes.grow}/>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="  Search"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <IconButton variant='outlined'>
                    <SwapIcon/>
                </IconButton>
                </Toolbar>
                </div>
                <Grid container spacing={1} >
                    <Grid item xs>
                        <Card_content/>
                    </Grid>
                    <Grid item xs>
                        <Card_content/>
                    </Grid>
                    <Grid item xs>
                        <Card_content/>
                    </Grid>
                </Grid>
                <br/>
                <Grid container spacing={1}>
                    <Grid item xs>
                        <Card_content/>
                    </Grid>
                    <Grid item xs>
                        <Card_content/>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
                <br/>
            </main>
            </div>
        </Grid>
        <Grid item xs={2}>
            <Toolbar/>
            <Drawer
                className={classes.drawer2}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper2,
                }}
                anchor = 'right'
            >
                <Toolbar />
                
                <Toolbar className={classes.customizeToolbar}>
                    <div className={classes.grow}> 
                    <Typography variant='h7'>
                        Upcoming Payments
                    </Typography>
                    <div className={classes.grow}/>
                    </div>
                    <div>
                    <StyledButton>
                        View all>
                    </StyledButton>
                    </div>
                </Toolbar>
                
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
                            <AppsIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "All subscriptions"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Solo subscriptions"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <GroupIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Group subscriptions"/>
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
                            <TvIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Streaming"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SportsEsportsIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Gaming"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <HeadsetIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Music"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <BrushIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Create"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DescriptionIcon/>
                        </ListItemIcon>
                        <ListItemText primary = "Work"/>
                    </ListItem>
                    
                </List>
                </div>
            </Drawer>
        </Grid>
    </Grid>
  );
}

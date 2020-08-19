import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function InteractiveList() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          MOST SPENT
        </Typography>
        <div className={classes.demo}>
          <List dense={dense}>
            <ListItem divider>
              <ListItemAvatar>
                <Avatar src="Netflix_small.png"></Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Notability"
                secondary={secondary ? "Secondary text" : null}
              />
              <ListItemText
                primary="Team Plan"
                secondary={secondary ? "Secondary text" : null}
              />
              <ListItemSecondaryAction>
                <ListItemText
                  primary="$ 8.00"
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItemSecondaryAction>
            </ListItem>

            {generate(
              <ListItem divider>
                <ListItemAvatar></ListItemAvatar>
                <ListItemText
                  primary="Service"
                  secondary={secondary ? "Secondary text" : null}
                />
                <ListItemText
                  primary="Detailed Service Plan"
                  secondary={secondary ? "Secondary text" : null}
                />
                <ListItemSecondaryAction>
                  <ListItemText
                    primary="$ 8.00"
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            )}
          </List>
        </div>
      </Grid>
    </Grid>
  );
}

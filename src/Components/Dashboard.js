import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

//List import
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

//chip import
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 10%",
    padding: theme.spacing(3, 2),
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
  topicsWindow: {
    width: "30%",
    height: "400px",
    borderRight: "2px solid grey",
  },
  chatWindow: {
    paddingLeft: "20px",
    width: "70%",
    height: "400px",
  },
  chatBox: {
    width: "85%",
  },
  button: {
    width: "15%",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h3" align="center" gutterBottom>
          {" "}
          Chat App
        </Typography>

        <Typography variant="h5" component="p" align="center" gutterBottom>
          {" "}
          Placeholder
        </Typography>

        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List component="nav" aria-label="main mailbox folders">
              {["hello", "python", "java"].map((topic) => (
                <ListItem key={topic} button>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}>
            {[{ from: "satwinder", msg: "kidha hall ne" }].map((chat, i) => (
              <div className={classes.flex} key={i}>
                <Chip
                  color="primary"
                  label={chat.from}
                  avatar={<Avatar>F</Avatar>}
                />
                <Typography variant="p">{chat.msg}</Typography>
              </div>
            ))}
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Dashboard;

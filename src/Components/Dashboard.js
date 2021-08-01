import React, { useState } from "react";
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

//button and textfield import
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

//importing context
import {CTX} from './Store';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 2%",
    [theme.breakpoints.up("md")]: {
      margin: "0 10%",
    },
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
    paddingLeft: "10px",
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

  // context import
  const {allChat, sendChatAction} = React.useContext(CTX);
  console.log(allChat);
  const topics = Object.keys(allChat);
  console.log(topics);
  
  // local state
  const [textValue, setTextValue] = useState("");
  const [activeTopic, setactiveTopic] = useState(topics[0]);
  
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h3" align="center" gutterBottom>
          Chat App
        </Typography>

        <Typography variant="h5" component="h3" align="center" gutterBottom>
          {activeTopic}
        </Typography>

        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List component="nav" aria-label="main mailbox folders">
              {topics.map((topic) => (
                <ListItem onClick={e => setactiveTopic(e.target.innerText)} key={topic} button>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}>
            {allChat[activeTopic].map((chat, i) => (
              <div className={classes.flex} key={i}>
                <Chip
                  color="primary"
                  label={chat.from}
                  avatar={<Avatar>F</Avatar>}
                />         
                <Typography variant="body1" component="h3" >{chat.msg}</Typography>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.flex}>
        <TextField id="standard-basic" className={classes.chatBox} variant="filled" size="small" label="Send a Chat" fullWidth value={textValue} onChange={ (e) => setTextValue(e.target.value) } />
          <Button variant="contained" className={classes.button} color="primary"
          onClick = { () =>
          { sendChatAction(textValue);
            setTextValue(''); }
          }>
            SEND
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Dashboard;

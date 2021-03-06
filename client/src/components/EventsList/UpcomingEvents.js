import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EventIcon from '@material-ui/icons/Event';
import { Container } from '@material-ui/core';
import { useEventHook } from '../../hooks/Hooks';
import Button from "@material-ui/core/Button"
// import Link from '@material-ui/core/Link';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    // maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        }
  },
  button: {
    width: 300,
    height: 90,
    // width: '200%',
    padding: '6px 16px',
    backgroundColor: "#e94837",
    color: "white",
    //alignItems: 'stretch'
    // marginLeft: 50,

  },
  test: {
    // direction: "column",
    // borderStyle: "solid",
    justifyContent: 'center',
    alignItems: "stretch"

  },
  container: {
    // borderColor: "black",
    // width: 600,
    padding: theme.spacing(2),
    // textAlign: 'center',
    // direction: "column",
    // justifyContent: 'center',
    alignItems: 'stretch',
    color: theme.palette.text.secondary,
  }
}));

function EventsList(props) {
  const classes = useStyles();
  const eventHook = useEventHook();
  const events = [
    //   {
    //   eventName: "Event 1",
    //   firstName: "Lisa",
    //   lastName: "Worsham"
    // },
    //   {
    //   eventName: "Event 2",
    //   firstName: "Lisa",
    //   lastName: "Worsham"
    // },
    //   {
    //   eventName: "Event 3",
    //   firstName: "Lisa",
    //   lastName: "Worsham"
    // },
    //   {
    //   eventName: "Event 4",
    //   firstName: "Lisa",
    //   lastName: "Worsham"
    // }
  ]

  function onClickEvent(event2){
    console.log(event2)
    props.setEvent(event2)
  }



  return (
    <Container className={classes.container}>
      <h2>My Upcoming Events</h2>
      <List className={classes.container}>
      {eventHook.events.slice(0, 5).map((event2) => {
          return (
          //<Grid item className={classes.test}>
            <ListItem  key={event2._id} className={classes.test}>
              <Link to="/events" className="link">
              <Button className={classes.button}
                type="link"
                variant="contained"
                onClick={() => onClickEvent(event2)}
              >
                <ListItemAvatar>
                <Avatar>
                  <EventIcon style={{ fontSize: 40, color: 'white', backgroundColor: "#e94837" }} />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={event2.eventName} secondary={`${event2.firstName} ${event2.lastName}`} />
              </Button>
              </Link>
            </ListItem>
          //</Grid>
      )})}
      </List>
    </Container>
  );
}


export default EventsList;
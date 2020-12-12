import React from "react";
import "./Home.css"
import { useState } from 'react';
import Container from "../components/Container/index"
import OutlinedTimeline from "../components/Time line/Timeline"
import EventCountdown from "../components/Countdown/EventCountdown"
import ReminderForm from "../components/ReminderForm/ReminderForm"
import UpcomingEvents from "../components/EventsList/UpcomingEvents"
import NewReminders from "../components/NewReminders/NewReminders"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CreateBtn from "../components/CreateEvent Button/CreateBtn"

import Typography from '@material-ui/core/Typography';

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));
      
 function Home() {
    const classes = useStyles();
    
const [reminders, setReminders] = useState([
  {
    id: 1, 
    title: "Call vendors"
  }

]);

const addReminder =(text) => {

  const newReminder ={
    id: 2,
    title: text
  }
  setReminders([...reminders, newReminder])
};
 return (
        <>
      <Container>  
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
                <EventCountdown/>
            </Paper>
          </Grid>
          <Grid item xs={12}>
        <CreateBtn/>
        </Grid>
          <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <OutlinedTimeline/>
              </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} id="upcomingEvents">
           <UpcomingEvents/>
              </Paper>
              <Paper className={classes.paper} id="Reminders">
              <Typography variant="h6" className={classes.title}>
         My Reminders
          </Typography>
                    <NewReminders reminders={reminders}/> 
                    <ReminderForm addReminder={addReminder} />  
              </Paper>
        </Grid>
     </Grid>
   </div>
</Container>
 </>
)}

export default Home;
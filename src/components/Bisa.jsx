import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

/* const background = require("../assets/img/bgbody.png"); */
const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: 'linier-gradient(45deg, #90caf9 30%, #FF8E53 90%)',
    backgroundSize: 'auto',
    padding: theme.spacing(11, 0, 7),
    backgroundRepeat: 'no-repeat',
    minHeight: '500px',
    position: 'relative',
    overflow: 'hidden'
    /* background: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    height: '550px',
    position: 'relative',
    overflow: 'hidden'   */
  },
  paper: {
    /* borderRadius: 20, */
    padding: theme.spacing(5),
    textAlign: 'center',
    backgroundColor: '#50539F',
    color: '#fff',
    minHeight: '400px',
  },
  paper1: {
    /* borderRadius: 20, */
    padding: theme.spacing(5),
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#000',
    minHeight: '400px',
  },
  spacing: {
    paddingBottom: theme.spacing(5),
    paddingTop: 30,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Container maxWidth="md">
        <Grid item xs>
          <Typography variant="h3" align="left" color="textPrimary" className={classes.spacing}>
            <b>WHAT CAN I DO?</b>
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper1}>
              <img alt="Skills" src={require("../assets/img/networkicon.png")} height={'150px'} /> <br />
              <Typography variant="h6" align="center" style={{ marginTop: 30 }}>
                <b>Network Engineer</b>
              </Typography>
              <Typography variant="subtitle1" align="center" style={{ marginTop: 10 }}>
                Configuration Metro Ethernet device.
              </Typography>
            </Paper>

          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <img alt="Skills" src={require("../assets/img/towericon.png")} height={'150px'} /> <br />
              <Typography variant="h6" align="center" style={{ marginTop: 30 }}>
                <b>Telco Engineer</b>
              </Typography>
              <Typography variant="subtitle1" align="center" style={{ marginTop: 10 }}>
              Advance in the seluler, fiber optic & processing signal information
            </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <img alt="Skills" src={require("../assets/img/websitedev1.png")} height={'150px'} /> <br />
              <Typography variant="h6" align="center" style={{ marginTop: 30 }}>
                <b>Junior Web Dev</b>
              </Typography>
              <Typography variant="subtitle1" align="center" style={{ marginTop: 10 }}>
              just getting started with reactjs
            </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}

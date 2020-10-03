import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Grid from '@material-ui/core/Grid';
//import RestoreIcon from '@material-ui/icons/Restore';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: 500,
    backgroundColor: '#EBEBEB',
  },
  icon: {
      width: 30,
      height: 30
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={classes.root}
    >
      <Grid container spacing={3}>
        <Grid item xs={3} md={3}>
          <BottomNavigationAction href="https://www.instagram.com/gazali_saleh/" label="Instagram" icon={<Instagram className={classes.icon}/>} />
        </Grid>
        <Grid item xs={3} md={3}>
          <BottomNavigationAction href="https://linkedin.com/in/muh-gazali-saleh-6a3514191/" label="Linkedin" icon={<LinkedIn className={classes.icon}/>} />
        </Grid>
        <Grid item xs={3} md={3}>
          <BottomNavigationAction href="https://twitter.com/gazalisaleh78" label="Twitter" icon={<Twitter className={classes.icon}/>} />
        </Grid>
        <Grid item xs={3} md={3}>
          <BottomNavigationAction href="https://www.facebook.com/gazali6424li" label="Facebook" icon={<Facebook className={classes.icon}/>} />
        </Grid>
      </Grid>
    </BottomNavigation>
  );
}

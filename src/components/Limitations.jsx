import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import { Instagram, LinkedIn, YouTube } from '@material-ui/icons';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    width: 230,
  },
});

export default function TypographyMenu() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <LinkedIn fontSize="small" />
          </ListItemIcon>
{/*           <Typography variant="inherit" href="https://www.instagram.com/gazali_saleh/?hl=id">Muh. Gazali Saleh</Typography> */}
          <Link color="inherit" href="https://www.instagram.com/gazali_saleh/?hl=id">
                <b>Muh. Gazali Saleh</b>
            </Link>{' '}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Instagram fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">gazali_saleh</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <YouTube fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Gazali Saleh
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

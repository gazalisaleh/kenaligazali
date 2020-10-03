import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Sosmed from '../components/Sosmed';
//import Limitations from '../components/Limitations';

const background = require("../assets/img/mainheader.png");
const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        background: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        maxHeight: '500px',
        position: 'relative',
        overflow: 'hidden'
    },
    title: {
        fontWeight: 'bold',
        paddingBottom: theme.spacing(2),
        color: '#50539F'
    },
    description: {
        lineHeight: 2.3,
        paddingBottom: 30
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    spacing: {
        marginBottom: theme.spacing(6)
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>            
            <Container maxWidth="md">
                {/* <Container class= "row">
                    <div class="row">                    
                        <Avatar alt="Remy Sharp" src={require("../assets/img/me.jpeg")} className={classes.large} />
                        <Limitations />
                    </div>
                </Container> */}

                <Grid container>
                    
                    <Grid item xs={12} md={7}>
                        <Typography variant="h3" align="left" className={classes.title} gutterBottom>
                            Hi, I'm Muh. Gazali
                        </Typography>
                        <Typography variant="h6" align="left" className={classes.description}>
                            I'm a <b>BEGINNER WEB DEVELOPER</b> and <b>NETWORK ENGINEER</b> from <b>MAKASSAR</b>, Indonesia.
                            I love to meet new people, experiencing new things from them and building my <b>SOCIAL NETWORK</b>.
                        </Typography>
                        <Sosmed/>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <img alt="Skills" src={require("../assets/img/me.png")} />
                       {/*  <img className={classes.large} alt="complex" src="../assets/img/bgheader.png" /> */}
                    </Grid>
                </Grid>
                
                {/* <Typography variant="h3" align="left" className={classes.title} gutterBottom>
                    Hi, My Future Campany
                </Typography>
                <Typography variant="h6" align="left" className={classes.description}>
                    I'm a <b>COTO</b> and <b>MOBILE DEVELOPER</b> from <b>MAKASSAR</b>, Indonesia.
                    Passionate about what I do and always learning something new. <b>ADAKAH</b> and <b>KOPI</b> is the key that I always believe it once I handle a project.
                </Typography> */}
            </Container>
        </div>
    );
}



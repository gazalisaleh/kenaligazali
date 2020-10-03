import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ResumeCard from './Card/Resume';

const useStyles = makeStyles((theme) => ({
    containerSpacing: {
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(6),
    },
    spacing: {
        paddingBottom: theme.spacing(5),
    },
    containerPadding: {
        paddingTop: 20
    }
}));

export default function Resume() {
    const classes = useStyles();

    const work = [
        {
            id: 1,
            title: 'PT. Datacomm Diangraha',
            description: 'Network Engineer',
            year: '2019 - 2020'
        }
    ]

    const education = [
        {
            id: 1,
            title: 'Telkom University',
            description: 'Telecommunication Engineering',
            year: '2015 - 2019'
        },
        {
            id: 2,
            title: 'SMK Telkom Makassar',
            description: 'Telecommunication Engineering',
            year: '2012 - 2015'
        }
    ]

    return (
        <div>
            <Grid container className={classes.containerSpacing}>
                <Grid item xs>
                    <Typography variant="h3" align="left" color="textPrimary" className={classes.spacing}>
                        <b>RESUME</b>
                    </Typography>
                    <div className={classes.spacing}>
                        <Typography variant="h4" align="left">
                            <b>Work</b>
                        </Typography>
                        <Grid container className={classes.containerPadding} spacing={3}>
                            {
                                work.map(x => (
                                    <Grid item xs={12} lg={6} key={x.id}>
                                        <ResumeCard title={x.title} description={x.description} year={x.year} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </div>
                    <div>
                        <Typography variant="h4" align="left">
                            <b>Education</b>
                        </Typography>
                        <Grid container className={classes.containerPadding} spacing={3}>
                            {
                                education.map(x => (
                                    <Grid item xs={12} lg={6} key={x.id}>
                                        <ResumeCard title={x.title} description={x.description} year={x.year} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
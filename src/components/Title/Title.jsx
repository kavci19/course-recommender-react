import React from 'react';
import '@fontsource/roboto';
import Typography from '@material-ui/core/Typography';
// import styles from './Title.module.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginBottom:20
  },
});

const Title = () => {

    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Typography variant="h2" gutterBottom="true">
                Course Recommender
            </Typography>
        </div>
    )
}

export default Title;
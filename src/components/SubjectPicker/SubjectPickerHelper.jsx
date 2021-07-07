import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from "./Chart.module.css";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


const useStyles = makeStyles((theme) => ({
  typography: {
    margin: 10,
  },
}));

export default function Help() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={styles.helpBar}>
      <Button aria-describedby={id} variant="text" onClick={handleClick} className={styles.helpBar}>
      <div className={styles.buttonContent}> <HelpOutlineIcon/> </div>
      </Button>
      <Popover className={styles.popoverWidth}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
            <p>CourseRec recommends the top-rated courses offered at Columbia for the current semester. </p>
            <p>Course rankings are calculated via natural language processing algorithms and sentiment analysis
                of course reviews from sources such as Reddit, Facebook, and the internet. </p>
            <p>Select a department(s) and see which must-take courses are being offered for that department!</p>
            </Typography>
      </Popover>
    </div>
  );
}
import React from 'react'
import SpinnerImg from '../../assets/img/3dotsspiner.gif';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    spinner: {
        width: 100,
        display: "block",
        margin: "auto",
    }
});

const Spinner = () => {
  
    let classes = useStyles();

    return (
    <React.Fragment>
        <img src={SpinnerImg} alt="loading..." className={classes.spinner} />
    </React.Fragment>
  )
}

export default Spinner
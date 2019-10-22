import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
}));

const MainPage = (props) => {

  const classes = useStyles();
  
  return (
    <ul className={classes.root}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/registration">registration</Link></li>
      <li><Link to="/user">user</Link></li>
    </ul>
  );
};

export default MainPage;

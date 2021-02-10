import React, { useEffect, useState } from 'react';
import {
  CssBaseline,
  Container,
  Grid,
  Paper,
  MenuItem,
  Avatar,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import * as TYPES from './types';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
// import { globalSetAuthTokenANdId } from './actions/authentication'
import useConfig from './hooks/useConfig';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 25,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const App = ({ globalEventDistributor }) => {

  useConfig();
  const [allDataLoaded, setAlDataLoaded] = useState(false)
  

  useEffect(() => {
    // insert lifecycle method here
  }, []);
  
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Grid container component="main" spacing={2} className={classes.root}>
          <Typography>Example of MicroFrontEnd template</Typography>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Header from '../../common/Header';
import Footer from '../Home/components/Footer';

const useStyles = makeStyles(() => ({
  btn: {
    background: '#00b074',
    borderRadius: 5,
    padding: '13px 0px',
    width: '100%',
    textAlign: 'center',
    cursor: 'pointer',
    color: 'white',
    transition: 'background-color 0.5s ease',
    '&:hover': {
      background: '#019563',
    },
  },
}));

function HomePage() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  const classes = useStyles();

  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 100,
        }}
      >
        <div
          style={{
            padding: '80px 100px',
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 300,
            background: '#F3F7FB',
          }}
        >
          <div style={{ fontSize: 40, fontWeight: 'bold' }}>Sign In</div>
          <div style={{ marginTop: 45, width: '100%' }}>
            <TextField
              inputProps={{
                style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
              }}
              style={{ background: 'white' }}
              fullWidth
              size="small"
              type="email"
              variant="outlined"
              placeholder="User Name"
            />
          </div>
          <div style={{ marginTop: 35, width: '100%' }}>
            <TextField
              inputProps={{
                style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
              }}
              style={{ background: 'white' }}
              fullWidth
              type="password"
              size="small"
              variant="outlined"
              placeholder="Password"
            />
          </div>
          <div style={{ marginTop: 35 }} className={classes.btn}>
            SIGN IN
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

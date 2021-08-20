import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logoImage from '../../../assets/logo.png';

const useStyles = makeStyles(() => ({
  blueBtn: {
    background: '#3f73b9',
    color: 'white',
    padding: '10px 40px',
    '&:hover': {
      background: '#0959c5',
    },
  },
  greenBtn: {
    background: '#6ba84d',
    color: 'white',
    padding: '10px 40px',
    '&:hover': {
      background: '#39930d',
    },
  },
}));

// component for displaying the name health check in the home page
const MyComponent = () => {
  const classes = useStyles();
  return (
    <div>
      <div
        style={{
          height: 'calc(100vh - 60px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <div style={{ textAlign: 'center' }}>
            <img style={{ height: 100 }} alt="logo" src={logoImage} />
          </div>

          <div
            style={{
              fontWeight: 'bold',
              fontSize: 30,
              letterSpacing: 1,
              textShadow: '1px 1px 2px #000',
              textAlign: 'center',
              lineHeight: 1.5,
              marginTop: 45,
            }}
          >
            The labor market
            <br />
            for universities and part-time professors
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 70,
              width: 800,
            }}
          >
            <div>
              <div style={{ marginBottom: 15, fontWeight: 'bold' }}>
                Professor or Dept Chair?
              </div>
              <Button className={classes.blueBtn}>Sign Up</Button>
            </div>
            <div>
              <div style={{ marginBottom: 15, fontWeight: 'bold' }}>
                Want to be an Adjunct Professor or Guest Lecturer?
              </div>
              <Button className={classes.greenBtn}>Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;

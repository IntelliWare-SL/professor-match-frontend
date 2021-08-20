import React from 'react';
import { Grid } from '@material-ui/core';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import { makeStyles } from '@material-ui/core/styles';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

const useStyles = makeStyles(() => ({
  main: {
    padding: '70px 30px',
    background: '#ffffff',
  },
}));

function Services() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Grid container>
        <Grid xs={6} item style={{ textAlign: 'center' }}>
          <img
            style={{ objectFit: 'cover', height: 400, borderRadius: 10 }}
            alt="doctor"
            src="https://rotaryhall.com/wp-content/uploads/2020/11/lecturers.jpg"
          />
        </Grid>
        <Grid
          xs={6}
          item
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}
          >
            What is Professor Match ?
          </div>
          <div style={{ fontSize: 18, marginTop: 45 }}>
            Professor Match is designed for three groups:
            <ul style={{ lineHeight: 3, listStyle: 'none' }}>
              <li>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 600,
                  }}
                >
                  <CheckRoundedIcon
                    style={{ color: '#00b074', marginRight: 20 }}
                  />
                  <div>
                    Department chairs or deans searching for adjunct professors
                  </div>
                </div>
              </li>
              <li>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 600,
                  }}
                >
                  <CheckRoundedIcon
                    style={{ color: '#00b074', marginRight: 20 }}
                  />
                  <div>Professors looking for guest lecturers</div>
                </div>
              </li>
              <li>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 600,
                  }}
                >
                  <CheckRoundedIcon
                    style={{ color: '#00b074', marginRight: 20 }}
                  />
                  <div>People who want to fill either of those roles</div>
                </div>
              </li>
            </ul>
          </div>
          <div style={{ marginTop: 20, fontSize: 18 }}>
            Where can they meet?{' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>HERE!</span>
          </div>
        </Grid>

        <Grid
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 50,
            padding: '0px 100px',
          }}
          container
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={2}>
            <PersonRoundedIcon style={{ fontSize: 60, marginBottom: 10 }} />
            <div style={{ marginBottom: 10 }}>Signup & Create a Profile</div>
            <div style={{ marginTop: 10, fontSize: 18 }}>Step 1</div>
          </Grid>

          <Grid item xs={1}>
            <ArrowRightAltOutlinedIcon style={{ fontSize: 120 }} />
          </Grid>

          <Grid item xs={2} style={{ lineHeight: 1.5 }}>
            <SearchRoundedIcon style={{ fontSize: 60, marginBottom: 10 }} />
            <div style={{ marginBottom: 10 }}>Search for a Match</div>
            <div style={{ marginTop: 10, fontSize: 18 }}>Step 2</div>
          </Grid>

          <Grid item xs={1}>
            <ArrowRightAltOutlinedIcon style={{ fontSize: 120 }} />
          </Grid>

          <Grid item xs={3}>
            <PeopleAltRoundedIcon style={{ fontSize: 60, marginBottom: 10 }} />
            <div style={{ marginBottom: 10 }}>
              The algorithm finds the matches Connect with each other!
            </div>
            <div style={{ marginTop: 10, fontSize: 18 }}>Step 3</div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Services;

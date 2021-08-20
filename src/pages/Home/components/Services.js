import React from 'react';
import { Grid } from '@material-ui/core';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';

function Services() {
  return (
    <div
      style={{
        padding: '50px 30px',
        background: '#cccc',
      }}
    >
      <Grid container>
        <Grid
          xs={12}
          item
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            marginBottom: 40,
          }}
        >
          <div
            style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}
          >
            What is Professor Match ?
          </div>
          <div style={{ fontSize: 18, marginTop: 35 }}>
            Professor Match is designed for three groups:
            <ol style={{ lineHeight: 2 }}>
              <li>
                Department chairs or deans searching for adjunct professors
              </li>
              <li>Professors looking for guest lecturers</li>
              <li>People who want to fill either of those roles</li>
            </ol>
          </div>
          <div style={{ marginTop: 20, fontSize: 18 }}>
            Where can they meet?{' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>HERE!</span>
          </div>
        </Grid>

        <Grid
          style={{ textAlign: 'center', fontWeight: 'bold' }}
          container
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={2}>
            <div style={{ marginBottom: 10 }}>Signup & Create a Profile</div>
            <PersonRoundedIcon style={{ fontSize: 60 }} />
            <div style={{ marginTop: 10, fontSize: 18 }}>Step 1</div>
          </Grid>
          <Grid item xs={1}>
            <ArrowRightAltOutlinedIcon style={{ fontSize: 120 }} />
          </Grid>
          <Grid item xs={2} style={{ lineHeight: 1.5 }}>
            <div style={{ marginBottom: 10 }}>
              <u>Search for a Match:</u>
            </div>
            <div style={{ fontWeight: 'normal' }}>
              University finds Labor
              <br />
              Labor finds University
            </div>
            <div style={{ marginTop: 10, fontSize: 18 }}>Step 2</div>
          </Grid>
          <Grid item xs={1}>
            <ArrowRightAltOutlinedIcon style={{ fontSize: 120 }} />
          </Grid>
          <Grid item xs={3}>
            <div style={{ marginBottom: 10 }}>
              The algorithm finds the matches Connect with each other!
            </div>
            <PeopleAltRoundedIcon style={{ fontSize: 60 }} />
            <div style={{ marginTop: 10, fontSize: 18 }}>Step 3</div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Services;

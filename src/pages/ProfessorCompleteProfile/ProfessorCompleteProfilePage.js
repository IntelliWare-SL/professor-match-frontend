import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, Grid, TextField } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
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
  formTitle: {
    fontSize: 20,
  },
}));

function HomePage({ match }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [wantGuestLecturer, setWantGuestLecturer] = React.useState({
    checked: false,
    inPerson: true,
    zoom: true,
  });
  const [wantAdjunctProfessor, setWantAdjunctProfessor] = React.useState({
    checked: false,
    inPerson: true,
    zoom: true,
  });

  const classes = useStyles();

  return (
    <div>
      <Header />
      <div>
        <div style={{ margin: '30px 20%' }}>
          <div
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              marginBottom: 50,
              textAlign: 'center',
            }}
          >
            Complete Your Profile
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <span className={classes.formTitle}>Personal Information</span>
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputProps={{
                  style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
                }}
                style={{ background: 'white' }}
                fullWidth
                size="small"
                type="text"
                variant="outlined"
                placeholder="User Name"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputProps={{
                  style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
                }}
                style={{ background: 'white' }}
                fullWidth
                size="small"
                type="text"
                variant="outlined"
                placeholder="User Name"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputProps={{
                  style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
                }}
                style={{ background: 'white' }}
                fullWidth
                size="small"
                type="text"
                variant="outlined"
                placeholder="User Name"
              />
            </Grid>
          </Grid>

          {/* University or School Information */}
          <Grid container spacing={2} style={{ marginTop: 20 }}>
            <Grid item xs={12}>
              <span className={classes.formTitle}>
                University or School Information
              </span>
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputProps={{
                  style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
                }}
                style={{ background: 'white' }}
                fullWidth
                size="small"
                type="text"
                variant="outlined"
                placeholder="School Name"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputProps={{
                  style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
                }}
                style={{ background: 'white' }}
                fullWidth
                size="small"
                type="text"
                variant="outlined"
                placeholder="Campus Location"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputProps={{
                  style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
                }}
                style={{ background: 'white' }}
                fullWidth
                size="small"
                type="text"
                variant="outlined"
                placeholder="College"
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                inputProps={{
                  style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
                }}
                style={{ background: 'white' }}
                fullWidth
                size="small"
                type="text"
                variant="outlined"
                placeholder="Discipline / Functional area of teaching"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputProps={{
                  style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
                }}
                style={{ background: 'white' }}
                fullWidth
                size="small"
                type="text"
                variant="outlined"
                placeholder="Department"
              />
            </Grid>
          </Grid>

          {/* What role do you need to fill? */}
          <Grid container spacing={2} style={{ marginTop: 20 }}>
            <Grid item xs={12}>
              <span className={classes.formTitle}>
                What role do you need to fill?
              </span>
            </Grid>
            <Grid item xs={4}>
              <Checkbox
                checked={wantGuestLecturer.checked}
                onChange={(e) =>
                  setWantGuestLecturer({
                    ...wantGuestLecturer,
                    checked: e.target.checked,
                  })
                }
                name="checkedB"
                color="primary"
              />
              Guest Lecturer
            </Grid>
            <Grid item xs={4}>
              <Checkbox
                onChange={(e) =>
                  setWantGuestLecturer({
                    ...wantGuestLecturer,
                    inPerson: e.target.checked,
                  })
                }
                checked={wantGuestLecturer.inPerson}
                name="inPerson"
                color="primary"
                disabled={!wantGuestLecturer.checked}
              />
              In person on campus
            </Grid>
            <Grid item xs={4}>
              <Checkbox
                name="zoom"
                color="primary"
                onChange={(e) =>
                  setWantGuestLecturer({
                    ...wantGuestLecturer,
                    zoom: e.target.checked,
                  })
                }
                checked={wantGuestLecturer.zoom}
                disabled={!wantGuestLecturer.checked}
              />
              Remote via Zoom, etc.
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={4}>
              <Checkbox
                checked={wantAdjunctProfessor.checked}
                onChange={(e) =>
                  setWantAdjunctProfessor({
                    ...wantAdjunctProfessor,
                    checked: e.target.checked,
                  })
                }
                name="checkedB"
                color="primary"
              />
              Adjunct Professor
            </Grid>
            <Grid item xs={4}>
              <Checkbox
                onChange={(e) =>
                  setWantAdjunctProfessor({
                    ...wantAdjunctProfessor,
                    inPerson: e.target.checked,
                  })
                }
                checked={wantAdjunctProfessor.inPerson}
                disabled={!wantAdjunctProfessor.checked}
                name="checkedB"
                color="primary"
              />
              In person on campus
            </Grid>
            <Grid item xs={4}>
              <Checkbox
                onChange={(e) =>
                  setWantAdjunctProfessor({
                    ...wantAdjunctProfessor,
                    zoom: e.target.checked,
                  })
                }
                checked={wantAdjunctProfessor.zoom}
                disabled={!wantAdjunctProfessor.checked}
                name="checkedB"
                color="primary"
              />
              Remote via Zoom, etc.
            </Grid>
          </Grid>

          {/* For which Functional department are you recruiting */}
          <Grid container spacing={2} style={{ marginTop: 20 }}>
            <Grid item xs={12}>
              <span className={classes.formTitle}>
                For which Functional department are you recruiting?
              </span>
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputProps={{
                  style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
                }}
                style={{ background: 'white' }}
                fullWidth
                size="small"
                type="text"
                variant="outlined"
                placeholder="User Name"
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

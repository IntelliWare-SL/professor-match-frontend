import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Checkbox,
  Grid,
  MenuItem,
  Radio,
  Select,
  TextField,
} from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import Footer from '../Home/components/Footer';
import Header from '../../common/Header';

const useStyles = makeStyles(() => ({
  btn: {
    background: '#00b074',
    borderRadius: 5,
    padding: '13px 0px',
    width: '200px',
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

function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.signInReducer.user);

  const classes = useStyles();

  React.useEffect(() => {
    if (!user) {
      history.push('/');
    } else if (!user.isProfileCompleted) {
      if (user.type === 'lecturer') {
        history.push('/complete-profile/lecturer');
      } else {
        history.push('/complete-profile/professor');
      }
    }
  }, [user]);

  return (
    <div>
      <Header />
      <div style={{ margin: '30px 300px' }}>
        <div>
          <Grid
            container
            style={{
              background: 'rgb(246,246,246)',
              padding: 40,
              borderRadius: 30,
              boxShadow: '5px 5px #888888',
            }}
          >
            <Grid xs={3} style={{ paddingRight: 30 }} item>
              <Avatar
                alt="A"
                style={{ height: 150, width: 150, marginLeft: 17 }}
              />
              <div
                style={{
                  background: 'powderblue',
                  borderRadius: 10,
                  padding: '15px 25px',
                  marginTop: 50,
                }}
              >
                <div style={{ marginBottom: 15 }}>
                  <b>Guest Lecturer</b>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 5,
                  }}
                >
                  <CheckRoundedIcon
                    style={{
                      color: 'cadetblue',
                      display: 'block',
                      marginRight: 15,
                    }}
                  />
                  <div>In Person</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <CheckRoundedIcon
                    style={{
                      color: 'cadetblue',
                      display: 'block',
                      marginRight: 15,
                    }}
                  />
                  <div>Zoom</div>
                </div>
              </div>
              <Grid item xs={12} style={{ marginTop: 40 }}>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <TwitterIcon
                      style={{
                        marginLeft: 20,
                        fontSize: 40,
                        display: 'block',
                        marginRight: 10,
                      }}
                    />
                    <div>Twitter</div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: 10,
                    }}
                  >
                    <LinkedInIcon
                      style={{
                        marginLeft: 20,
                        fontSize: 40,
                        display: 'block',
                        marginRight: 10,
                      }}
                    />
                    <div>LinkedIn</div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: 10,
                    }}
                  >
                    <GitHubIcon
                      style={{
                        marginLeft: 20,
                        fontSize: 40,
                        display: 'block',
                        marginRight: 10,
                      }}
                    />
                    <div>GitHub</div>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid
              style={{ paddingLeft: 50, borderLeft: '1px solid #ccc' }}
              xs={9}
              item
            >
              <Grid item xs={12}>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: 40 }}>
                    Kasun Chandika
                  </div>
                  <div style={{ fontWeight: 500, fontSize: 20, marginTop: 8 }}>
                    Computer Science
                  </div>
                  <Divider style={{ height: 2, marginTop: 15, width: 400 }} />
                </div>
                <div style={{ marginTop: 40 }}>
                  <div style={{ fontWeight: 'bold', fontSize: 20 }}>
                    Personal Info
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: 30,
                    }}
                  >
                    <CallIcon
                      style={{
                        display: 'block',
                        marginRight: 10,
                        fontSize: 30,
                      }}
                    />
                    <div>kasun7153@gmail.com</div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: 30,
                    }}
                  >
                    <LocationOnIcon
                      style={{
                        display: 'block',
                        marginRight: 10,
                        fontSize: 30,
                      }}
                    />
                    <div>Lives in Bandarawela, Uva</div>
                  </div>
                  <Divider style={{ height: 2, marginTop: 30 }} />
                </div>

                <div style={{ marginTop: 40 }}>
                  <div style={{ fontWeight: 'bold', fontSize: 20 }}>Skills</div>
                  <div
                    style={{ display: 'flex', marginTop: 15, flexWrap: 'wrap' }}
                  >
                    <div
                      style={{
                        padding: 10,
                        margin: 5,
                        background: 'lightgoldenrodyellow',
                      }}
                    >
                      HTML
                    </div>
                    <div
                      style={{
                        padding: 10,
                        margin: 5,
                        background: 'lightgoldenrodyellow',
                      }}
                    >
                      HTML
                    </div>
                  </div>
                  <Divider style={{ height: 2, margin: 10 }} />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <div style={{ marginTop: 100 }}>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;

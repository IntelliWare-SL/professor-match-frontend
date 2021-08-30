import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../Home/components/Footer';
import { registerUser } from './redux/signUpActions';

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

function HomePage({ match }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const classes = useStyles();

  const registerThisUser = () => {
    dispatch(
      registerUser(match.params.type, { firstName, lastName, email, password })
    );
  };

  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '50px 0px',
        }}
      >
        <div
          style={{
            padding: '80px 100px',
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 320,
            background: '#F3F7FB',
          }}
        >
          <div style={{ fontSize: 40, fontWeight: 'bold' }}>Create Account</div>
          <div style={{ marginTop: 39 }}>
            {match.params.type === 'professor'
              ? 'Want to hire or find a Guest Lecturer or Adjunct?'
              : 'Want to become an Adjunct Professor or Guest Lecturer?'}
          </div>
          <div style={{ marginTop: 30, width: '100%' }}>
            <div style={{ fontWeight: '500', marginBottom: 7 }}>First Name</div>
            <TextField
              inputProps={{
                style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
              }}
              style={{ background: 'white' }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              fullWidth
              size="small"
              type="text"
              variant="outlined"
              placeholder="First Name"
            />
          </div>
          <div style={{ marginTop: 20, width: '100%' }}>
            <div style={{ fontWeight: '500', marginBottom: 7 }}>Last Name</div>
            <TextField
              inputProps={{
                style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
              }}
              style={{ background: 'white' }}
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              size="small"
              type="text"
              variant="outlined"
              placeholder="Last Name"
            />
          </div>
          <div style={{ marginTop: 20, width: '100%' }}>
            <div style={{ fontWeight: '500', marginBottom: 7 }}>Email</div>
            <TextField
              inputProps={{
                style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
              }}
              style={{ background: 'white' }}
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="small"
              type="email"
              variant="outlined"
              placeholder="Email"
            />
          </div>
          <div style={{ marginTop: 20, width: '100%' }}>
            <div style={{ fontWeight: '500', marginBottom: 7 }}>Password</div>
            <TextField
              inputProps={{
                style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
              }}
              style={{ background: 'white' }}
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              size="small"
              variant="outlined"
              placeholder="Password"
            />
          </div>
          <div
            style={{ marginTop: 35 }}
            onClick={registerThisUser}
            className={classes.btn}
          >
            SIGN UP
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

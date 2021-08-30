import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import {
  Checkbox,
  Grid,
  MenuItem,
  Radio,
  Select,
  TextField,
} from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../Home/components/Footer';

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
      <div style={{ margin: '30px 20%' }}>
        <div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              marginBottom: 50,
              textAlign: 'center',
            }}
          >
            Profile
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

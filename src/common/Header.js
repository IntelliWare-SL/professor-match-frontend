import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import logoImage from '../assets/logo.png';
import { loginOutUser } from '../pages/SignIn/redux/signInActions';
import signInReducer from '../pages/SignIn/redux/signInReducer';

const useStyles = makeStyles(() => ({
  btn: {
    background: '#00b074',
    borderRadius: 5,
    padding: '13px 0px',
    marginLeft: 25,
    width: 120,
    textAlign: 'center',
    cursor: 'pointer',
    color: 'white',
    transition: 'background-color 0.5s ease',
    '&:hover': {
      background: '#019563',
    },
  },
  container: {
    boxSizing: 'content-box',
    width: '100%',
    height: 80,
    display: 'flex',
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    letterSpacing: 1,
  },
  btnContainer: {
    display: 'flex',
    marginRight: 40,
    fontSize: 14,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  headerItem: {
    cursor: 'pointer',
    '&:hover': {
      paddingTop: 10,
      borderTop: '2px solid #00b074',
    },
    fontWeight: 'bold',
    fontSize: 14,
  },
}));

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const idToken = useSelector((state) => state.signInReducer.idToken);
  const user = useSelector((state) => state.signInReducer.user);
  const [scrollY, setScrollY] = React.useState(0);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    });
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const strollToTop = () => {
    window.scrollTo(0, 0);
  };

  const logoutThisUser = () => {
    localStorage.removeItem('idToken');
    dispatch(loginOutUser());
    history.push('/');
  };

  return (
    <>
      <div style={{ height: 80, display: scrollY > 200 ? 'block' : 'none' }} />
      <div className={`${scrollY > 200 ? 'sticky' : ''} ${classes.container}`}>
        <div
          onClick={strollToTop}
          style={{
            marginLeft: 20,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img style={{ height: 45 }} alt="logo" src={logoImage} />
        </div>
        <div className={classes.btnContainer}>
          <div
            onClick={() => history.push('/')}
            className={classes.headerItem}
            style={{ marginLeft: 30 }}
          >
            Home
          </div>
          <div
            onClick={() => history.push('/')}
            className={classes.headerItem}
            style={{ marginLeft: 30 }}
          >
            How it Works
          </div>

          {idToken && (
            <div
              onClick={() => history.push('/profile')}
              className={classes.headerItem}
              style={{ marginLeft: 30 }}
            >
              Profile
            </div>
          )}

          {!idToken ? (
            <>
              <div
                className={classes.btn}
                onClick={() => history.push('/sign-in')}
              >
                SIGN IN
              </div>
            </>
          ) : (
            <>
              <div className={classes.btn} onClick={logoutThisUser}>
                LOG OUT
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;

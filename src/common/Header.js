import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import logoImage from '../assets/logo.png';
import {
  formsOpenClose,
  logOutUser,
  getNewNotifications,
} from '../pages/Home/redux/homeActions';

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
  const idToken = useSelector((state) => state.homeReducer.idToken);
  const user = useSelector((state) => state.homeReducer.user);
  const notifications = useSelector((state) => state.homeReducer.notifications);
  const [scrollY, setScrollY] = React.useState(0);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    });
  }, []);

  React.useEffect(() => {
    if (idToken) {
      dispatch(getNewNotifications());
    }
  }, [idToken]);

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

  const openLoginForm = () => {
    dispatch(formsOpenClose({ loginFormOpen: true, RegisterFormOpen: false }));
  };

  const openSignUpForm = () => {
    dispatch(formsOpenClose({ loginFormOpen: false, RegisterFormOpen: true }));
  };

  const logoutThisUser = () => {
    localStorage.removeItem('idToken');
    dispatch(logOutUser());
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
            How it Work
          </div>
          <div
            onClick={() => history.push('/')}
            className={classes.headerItem}
            style={{ marginLeft: 30 }}
          >
            Get Started
          </div>

          <div>
            <div style={{ fontWeight: 'bold' }}>
              {user && user.name}
              {user && user.field
                ? ` - ${user.field}`
                : user && ` - Registered Patient`}
            </div>
          </div>
          {!idToken ? (
            <>
              <div className={classes.btn} onClick={openSignUpForm}>
                LOGIN
              </div>
            </>
          ) : (
            <>
              <div className={classes.headerItem} onClick={logoutThisUser}>
                LOG OUT
              </div>
            </>
          )}
          {user && (
            <div style={{ marginLeft: 10 }}>
              <IconButton aria-describedby={id} onClick={handleClick}>
                <Badge badgeContent={notifications.length} color="secondary">
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;

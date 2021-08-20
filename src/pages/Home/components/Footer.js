import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useHistory } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(() => ({
  container: {
    background: '#1d292e',
    padding: '100px 50px',
    color: 'white',
  },
}));

// No logic is happening here, just normal html & css in the homepage Footer
function Footer() {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: 600,
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontWeight: 600,
            justifyContent: 'space-between',
          }}
        >
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
          <div
            onClick={() => history.push('/')}
            className={classes.headerItem}
            style={{ marginLeft: 30 }}
          >
            Get Started
          </div>
        </div>
        <div style={{ marginTop: 40 }}>
          <FacebookIcon style={{ marginLeft: 20, fontSize: 40 }} />
          <TwitterIcon style={{ marginLeft: 20, fontSize: 40 }} />
          <LinkedInIcon style={{ marginLeft: 20, fontSize: 40 }} />
          <GitHubIcon style={{ marginLeft: 20, fontSize: 40 }} />
        </div>
      </div>
    </div>
  );
}

export default Footer;

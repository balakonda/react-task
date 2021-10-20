import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BASE_API_URL, USER_SESSION_KEY } from '../../Helper/Constant';
import { getUserData, isAuthenticated } from '../../Helper/Authentication';
import { removeSessionStorage } from '../../Helper/Storage';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  pageHeader: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '72px',
    boxShadow: '0px 3px 6px #00000029',
    backgroundColor: '#ffffff',
    zIndex: 10,
    '@media only screen and (min-width: 768px)': {
      padding: '0 10%',
    },
    '&  img': {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
    },
    '& *': {
      color: '#6D8187',
    },
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
});

const PageHeader = () => {
  const classes = useStyles();
  const location = useLocation();
  const [path, setPath] = useState('/');

  const getUserProfile = () => {
    const user = getUserData();
    console.log('profile ', user);
    return user ? (
      <div className={classes.profile}>
        <img
          src={BASE_API_URL + user.image}
          alt="Profile"
          className="d-inline-block align-text-top"
        />
        <span>{user.token.name}</span>
      </div>
    ) : null;
  };
  React.useEffect(() => {
    setPath(location.pathname);
    if (location.pathname === '/') {
      console.log('removeSession', location.pathname);
      removeSessionStorage(USER_SESSION_KEY);
    }
  }, [location]);

  return path !== '/' && isAuthenticated ? (
    <header className={classes.pageHeader}>
      <nav className="navbar container-fluid">
        {getUserProfile()}
        <Link to="/">
          <span>Logout</span>
        </Link>
      </nav>
    </header>
  ) : null;
};
export default PageHeader;

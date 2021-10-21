import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  myToast: {
    zIndex: 11,
    backgroundColor: '#fff',
    position: 'fixed',
    top: '82px',
    right: '10px',
    width: '300px',
    boxShadow: '0px 3px 6px #0000000a',
    border: '1px solid #eee',
    '& > div:last-child': {
      background: '#f4f4f6',
      padding: '10px 5px',
      color: '#666',
    },
  },
  myToastHeader: {
    display: 'flex',
    padding: '5px',
    background: '#fbfafa',
    '& > div': {
      flex: '1',
    },
    '& > a': {
      textAlign: 'center',
      flexBasis: '30px',
    },
  },
});

/**
 * @param show Boolean: Show/Hide Toast
 * @param content: Object for Toast contents
 */
const MyToast = ({ show, content }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(null);
  const hideToast = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  useEffect(() => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }, [show]);

  const getTypeClass = () => {
    return `text-${content.type} ${classes.myToastHeader}`;
  };

  return open && show ? (
    <div className={classes.myToast}>
      <div className={getTypeClass()}>
        <div>{content.header}</div>
        <a href="#" onClick={hideToast}>
          <i className="fas fa-times text-secondary"></i>
        </a>
      </div>
      <div>{content.msg}</div>
    </div>
  ) : null;
};

export default MyToast;

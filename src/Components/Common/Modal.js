import React from 'react';
import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  myModal: {
    zIndex: 11,
    backgroundColor: '#00000033',
    composes: ['fullScreen'],
  },
});

const Modal = ({ isOpen, children }) => {
  const classes = useStyles();
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div
      className={classes.myModal}
      onClick={() => {
        isOpen = false;
      }}
    >
      {children}
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;

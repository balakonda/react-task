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

/**
 * Overlay component
 * @param isOpen Show/Hide overlay
 * @param children Body of the Modal
 */
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

import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  myCard: {
    backgroundColor: '#fff',
    padding: '8px',
    boxShadow: '0px 3px 6px #0000000A',
    border: {
      radius: '12px',
    },
    composes: ['card'],
  },
});

/**
 * Customised Card component
 * @param title Title for the card
 * @param children Body of the card
 */
const CustomCard = ({ title, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.myCard}>
      <div className="card-body">
        {title ? <h5 className="card-title">{title}</h5> : null}
        {children}
      </div>
    </div>
  );
};

export default React.memo(CustomCard);

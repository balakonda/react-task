import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  skeletonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    '@media only screen and (min-width: 768px)': {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    '&  > div': {
      backgroundColor: '#fff',
      padding: '8px',
      flex: '1',
      height: '150px',
      boxShadow: '0px 3px 6px #0000000A',
      border: {
        radius: '12px',
      },
    },
    '&  > div:last-child': {
      flex: '1 1 100%',
    },
  },
});

/**
 * Skeleton display while loading page
 */
const Skeleton = () => {
  const classes = useStyles();
  return (
    <section className={classes.skeletonWrapper}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  );
};

export default React.memo(Skeleton);

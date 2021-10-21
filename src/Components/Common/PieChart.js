import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  pieWrapper: {
    textAlign: 'center',
  },
  pieChart: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    margin: '0 auto',
  },
  pieText: {
    display: 'flex',
    justifyContent: 'center',
    '& > div:first-child': {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundImage: 'conic-gradient(#5285EC 0deg, #5285EC 360deg)',
      marginRight: '10px',
    },
  },
});

/**
 * Returns One angle Piechart using Conic Gradient
 * @param angle Angle at which color has to be shown
 * @param text Description of the angle given
 */
const PieChart = ({ angle, text }) => {
  const classes = useStyles();
  const conicStyle = () => {
    return {
      backgroundImage: `conic-gradient(#5285EC ${angle}deg, #ccc ${
        angle > 0 ? angle + 1 : 0
      }deg)`,
    };
  };

  return (
    <div className={classes.pieWrapper}>
      <div className={classes.pieChart} style={conicStyle()}></div>
      <div className={classes.pieText}>
        <div></div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default React.memo(PieChart);

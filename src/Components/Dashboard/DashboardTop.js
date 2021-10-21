import React from 'react';
import CustomCard from '../Common/CustomCard';
import TaskList from './TaskList';
import { createUseStyles } from 'react-jss';
import PieChart from '../Common/PieChart';

const useStyles = createUseStyles({
  dashboardTop: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    '@media only screen and (min-width: 768px)': {
      flexDirection: 'row',
    },
    '&  > div': {
      flex: '1',
    },
  },
});

const DashboardTop = ({ dashboard }) => {
  const classes = useStyles();

  const getAngle = () => {
    return Math.round(360 * (dashboard.tasksCompleted / dashboard.totalTasks));
  };

  return (
    <div className={classes.dashboardTop}>
      <CustomCard title="Tasks Completed">
        <div>
          <span className="display-3 text-primary">
            {dashboard.tasksCompleted}
          </span>
          /{dashboard.totalTasks}
        </div>
      </CustomCard>
      <CustomCard title="Latest Created Tasks">
        <TaskList
          list={dashboard.latestTasks || []}
          editable=""
          editTask=""
          deleteTask=""
          completeTask=""
        />
      </CustomCard>
      <CustomCard title="">
        <PieChart angle={getAngle()} text="Completed Tasks" />
      </CustomCard>
    </div>
  );
};
export default React.memo(DashboardTop);

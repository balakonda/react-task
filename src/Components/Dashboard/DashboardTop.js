import React from 'react';
import CustomCard from '../Common/CustomCard';
import TaskList from './TaskList';
import { createUseStyles } from 'react-jss';

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
      <div className="card myCard"></div>
    </div>
  );
};
export default DashboardTop;

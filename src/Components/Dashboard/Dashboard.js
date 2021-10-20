import React, { useState, useEffect } from 'react';
import Task from './Task';
import TaskList from './TaskList';
import { getApi, putApi, postApi, deleteApi } from '../../Helper/Api';
import { DASHBOARD_URL, TASKS_URL } from '../../Helper/Constant';
import { createUseStyles } from 'react-jss';
import SearchInput from '../Common/Search';
import MiniPopup from '../Common/MiniPopup';
import DashboardTop from './DashboardTop';

const useStyles = createUseStyles({
  dashboardBottom: {
    marginTop: '12px',
    display: 'flex',
    gap: '10px',
    flexDirection: 'column',
    '& > div': {
      textAlign: 'center',
    },
    '& > .taskList': {
      flex: '1 1 auto',
    },
    '@media only screen and (min-width: 768px)': {
      flexDirection: 'row',
      flexWrap: 'wrap',
      '& > div': {
        textAlign: 'initial',
      },
      '&  > div:first-child': {
        flex: '1',
      },
      '& > .taskList': {
        flex: '0 0 100%',
      },
    },
  },
});

const Dashboard = () => {
  const classes = useStyles();
  const [isVisible, setVisibility] = useState(null);
  const [showNewTask, setShowNewTask] = useState(false);
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);
  const [dashboard, setDashboard] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  // Handle New Task: POST
  const newTaskAPI = async (e) => {
    e.preventDefault();
    console.log('newTaskAPI ', e.target.task.value);
    try {
      setIsLoading(true);
      const res = await postApi(TASKS_URL, { name: e.target.task.value });
      loadInitialApi();
      console.log('ADD task list ', res);
    } catch (err) {
      console.log(err);
    }
    setShowNewTask(false);
  };

  // Handle Edit Task: PUT
  const editTaskAPI = async (data) => {
    console.log('item ', task);
    try {
      setIsLoading(true);
      const res = await putApi(`${TASKS_URL}/${data._id}`, data);
      loadInitialApi();
      setShowNewTask(false);
      console.log('Edit task list ', res);
    } catch (err) {
      console.log(err);
    }
  };

  // Handle Edit Task: PUT
  const editTaskSubmit = (e) => {
    e.preventDefault();
    editTaskAPI({ ...task, name: e.target.task.value });
  };

  // Handle Edit Task: PUT
  const deleteTaskAPI = async (item) => {
    console.log('Delete task  ', item);
    try {
      setIsLoading(true);
      const res = await deleteApi(`${TASKS_URL}/${item._id}`);
      loadInitialApi();
      console.log('Delete task list ', res);
    } catch (err) {
      console.log(err);
    }
    setShowNewTask(false);
  };

  const newTaskModal = (e) => {
    e.preventDefault();
    setTask(undefined);
    setShowNewTask(true);
  };

  const editTaskEvent = (item) => {
    console.log(item);
    setTask(item);
    setShowNewTask(true);
  };

  const completedTaskEvent = (item) => {
    console.log('completedTaskEvent ', item);
    setTask(item);
    editTaskAPI({ ...item, completed: !item.completed });
  };

  const loadInitialApi = () => {
    Promise.allSettled([getApi(DASHBOARD_URL), getApi(TASKS_URL)]).then(
      ([res1, res2]) => {
        setDashboard(res1.value);
        setTaskList(res2.value.tasks);
        setVisibility(true);
      }
    );
  };

  const getFilteredTasks = () => {
    if (!search) return taskList;
    return taskList.filter((item) => {
      return item.name?.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };

  const searchEvent = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    loadInitialApi();
  }, []);

  const noTasksContent = () => {
    return (
      <section>
        <MiniPopup title="">
          <p className="text-center fs-4">You have no task.</p>
          <button
            type="button"
            onClick={newTaskModal}
            className="btn btn-primary w-100"
          >
            + New Task
          </button>
        </MiniPopup>
      </section>
    );
  };

  const tasksContent = () => {
    return (
      <section>
        <DashboardTop dashboard={dashboard} />
        <div className={classes.dashboardBottom}>
          <div className="card-title">Tasks</div>
          <div>
            <SearchInput search={search} searchEvent={searchEvent} />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={newTaskModal}
          >
            + New Task
          </button>
          <TaskList
            list={getFilteredTasks()}
            editable="true"
            editTask={editTaskEvent}
            deleteTask={deleteTaskAPI}
            completeTask={completedTaskEvent}
          />
        </div>
      </section>
    );
  };

  if (!isVisible) return null;

  return (
    <>
      <Task
        submit={task ? editTaskSubmit : newTaskAPI}
        show={showNewTask}
        title={task ? 'Edit Task' : '+ New Task'}
        task={task}
      />
      {dashboard?.totalTasks > 0 ? (
        <>{tasksContent()}</>
      ) : (
        <>{noTasksContent()}</>
      )}
    </>
  );
};
export default Dashboard;

import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  taskList: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: '0 1rem',
    fontSize: '1.5rem',
    borderRadius: '8px',
    marginTop: '5px',
    '& li:last-child': {
      borderBottom: 0,
    },
  },
  taskItem: {
    display: 'flex',
    flexDirection: 'row',
    padding: '12px',
    borderBottom: '1px solid #ccc',
    gap: '10px',
    '&  > div': {
      flex: '0 0 auto',
    },
    '&  > span': {
      flex: '1 1 auto',
    },
    '& a': {
      color: '#6D8187',
      paddingRight: '10px',
    },
  },
});

const TaskList = ({ list, editable, editTask, deleteTask, completeTask }) => {
  const classes = useStyles();

  const getClassNameForName = (item) => {
    if (editable) {
      return item.completed
        ? 'text-secondary text-decoration-line-through'
        : 'text-primary';
    } else {
      return item.completed ? 'text-decoration-line-through' : '';
    }
  };
  return (
    <ul className={editable ? classes.taskList : ''}>
      {list.map((item) => (
        <li key={item._id} className={editable ? classes.taskItem : ''}>
          {editable ? (
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id={item._id}
                defaultChecked={item.completed}
                onChange={() => {
                  completeTask(item);
                }}
              />
              <label className="form-check-label d-none" htmlFor={item._id}>
                {item.name}
              </label>
            </div>
          ) : null}
          <span className={getClassNameForName(item)}>{item.name}</span>
          {editable ? (
            <div>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  editTask(item);
                }}
              >
                <i className="fas fa-pen"></i>
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  deleteTask(item);
                }}
              >
                <i className="fas fa-trash"></i>
              </a>
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
};
export default React.memo(TaskList);

import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal';

const Task = ({ show, submit, title, task }) => {
  const [taskName, setTaskName] = useState(task?.name || '');

  useEffect(() => {
    setTaskName(task?.name || '');
  }, [show]);

  if (!show) return null;
  return (
    <Modal isOpen={show}>
      <div className="miniPopup">
        <div className="card-body">
          <div className="card-title">{title}</div>
          <form onSubmit={submit}>
            <div className="mb-2">
              <input
                className="form-control"
                type="text"
                name="task"
                onChange={(e) => setTaskName(e.target.value)}
                value={taskName}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              {title}
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};
export default Task;

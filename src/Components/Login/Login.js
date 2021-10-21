import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postApi } from '../../Helper/Api';
import { USER_SESSION_KEY, LOGIN_URL, API_KEY } from '../../Helper/Constant';
import { setSessionStorage } from '../../Helper/Storage';
import MiniPopup from '../Common/MiniPopup';
import MyToast from '../Common/Toast';

const Login = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState({});
  const history = useHistory();

  const showErrorToast = (err) => {
    setShowToast(false);
    setIsLoading(false);
    setShowToast(true);
    setToastContent({
      type: 'danger',
      msg: err.statusText || 'Unknown',
      header: 'Login',
    });
  };
  // Login API: POST
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id && name && !isLoading) {
      setIsLoading(true);
      postApi(LOGIN_URL, {
        name,
        apiKey: API_KEY,
      })
        .then((res) => {
          setSessionStorage(USER_SESSION_KEY, res, true);
          history.push('/dashboard');
        })
        .catch(showErrorToast);
    }
  };

  const onFormInputChange = (e) => {
    switch (e.target.name) {
      case 'id':
        setId(e.target.value);
        break;
      case 'name':
        setName(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <MyToast show={showToast} content={toastContent} />
      <MiniPopup title="Login">
        <form name="loginForm" onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              name="id"
              id="id"
              className="form-control"
              type="text"
              value={id}
              onChange={onFormInputChange}
              placeholder="Id"
              aria-label="User Id"
            />
          </div>
          <div className="mb-2">
            <input
              name="name"
              id="name"
              className="form-control"
              type="text"
              value={name}
              onChange={onFormInputChange}
              placeholder="Name"
              aria-label="User name"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </MiniPopup>
    </>
  );
};

export default Login;

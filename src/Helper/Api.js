import { getUserData } from './Authentication';
import { LOGIN_URL } from './Constant';

const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
    Authorization: getUserData().token.token,
  };
};

const handleResponse = (res) => {
  if (res.status !== 200) {
    return Promise.reject(res);
  }
  return res.json();
};

export const getApi = (url, options = {}) => {
  return fetch(url, {
    ...options,
    method: 'GET',
    headers: getHeaders(),
  }).then(handleResponse);
};

export const postApi = (url, data, options = {}) => {
  return fetch(url, {
    ...options,
    method: 'POST',
    headers:
      url === LOGIN_URL
        ? {
            'Content-Type': 'application/json',
          }
        : getHeaders(),
    body: JSON.stringify(data),
  }).then(handleResponse);
};

export const putApi = async (url, data, options = {}) => {
  return fetch(url, {
    ...options,
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(data),
  }).then(handleResponse);
};

export const deleteApi = async (url, data, options = {}) => {
  return fetch(url, {
    ...options,
    method: 'DELETE',
    headers: getHeaders(),
    body: JSON.stringify(data),
  }).then(handleResponse);
};

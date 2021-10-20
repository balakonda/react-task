import { useState, useCallback } from 'react';
import { getUserData } from './Authentication';
import { LOGIN_URL } from './Constant';
const getHeaders = () => {
  console.log('getUserData ', getUserData());
  return {
    'Content-Type': 'application/json',
    Authorization: getUserData().token.token,
  };
};

export const getApi = async (url, options = {}) => {
  const res = await fetch(url, {
    ...options,
    method: 'GET',
    headers: getHeaders(),
  });
  const data = await res.json();
  return data;
};

export const postApi = async (url, data, options = {}) => {
  const res = await fetch(url, {
    ...options,
    method: 'POST',
    headers:
      url === LOGIN_URL
        ? {
            'Content-Type': 'application/json',
          }
        : getHeaders(),
    body: JSON.stringify(data),
  });
  const rdata = await res.json();
  return rdata;
};

export const putApi = async (url, data, options = {}) => {
  const res = await fetch(url, {
    ...options,
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  const rdata = await res.json();
  return rdata;
};

export const deleteApi = async (url, data, options = {}) => {
  const res = await fetch(url, {
    ...options,
    method: 'DELETE',
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  const rdata = await res.json();
  return rdata;
};
export const useGetTodos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = async (options = {}) => {
    try {
      setIsLoading(true);
      const todos = await getApi(options);
      setData(todos);
      return todos;
    } catch (e) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  };

  return {
    isLoading,
    error,
    data,
    execute: useCallback(execute, []),
  };
};

export const usePostTodo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = async (data, options = {}) => {
    try {
      setIsLoading(true);
      const todo = await postApi(data, options);
      setData(todo);
      return todo;
    } catch (e) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  };

  return {
    isLoading,
    error,
    data,
    execute,
  };
};

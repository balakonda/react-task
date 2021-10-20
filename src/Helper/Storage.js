export const getSessionStorage = (key, isJson = false) => {
  const val = window.sessionStorage.getItem(key);
  return isJson ? JSON.parse(val) : val;
};

export const setSessionStorage = (key, val, isJson = false) => {
  window.sessionStorage.setItem(key, isJson ? JSON.stringify(val) : val);
};

export const removeSessionStorage = (key) => {
  window.sessionStorage.removeItem(key);
};

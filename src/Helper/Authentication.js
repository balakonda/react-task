import { getSessionStorage } from './Storage';
import { USER_SESSION_KEY } from './Constant';

export const isAuthenticated = () => {
  const user = getSessionStorage(USER_SESSION_KEY, true);
  return !!user;
};

export const getUserData = () => {
  const user = getSessionStorage(USER_SESSION_KEY, true);
  return user;
};

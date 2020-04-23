import {
  ADD_CURRENT_USER,
  REMOVE_CURRENT_USER,
  CurrentUserActionTypes
} from '../types/currentUser';

export const addCurrentUser = (): CurrentUserActionTypes => {
  return {
    type: ADD_CURRENT_USER,
    payload: 'user-name'
  };
};

export const removeCurrentUser = (): CurrentUserActionTypes => {
  return {
    type: REMOVE_CURRENT_USER
  };
};
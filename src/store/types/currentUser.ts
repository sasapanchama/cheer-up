export const ADD_CURRENT_USER = 'ADD_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

interface AddCurrentUser {
  type: typeof ADD_CURRENT_USER,
  payload: any
};

interface RemoveCurrentUser {
  type: typeof REMOVE_CURRENT_USER,
};

export type CurrentUserActionTypes = AddCurrentUser | RemoveCurrentUser;

export interface CurrentUserState { user: any | null };
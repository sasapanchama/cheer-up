import {
  ADD_CURRENT_USER,
  REMOVE_CURRENT_USER,
  CurrentUserActionTypes,
  CurrentUserState
} from '../types/currentUser';

const initialState: CurrentUserState = {
  user: null
};

const currentUserReducer = (state = initialState, action: CurrentUserActionTypes): CurrentUserState => {
  switch (action.type) {
    case ADD_CURRENT_USER:
      return { ...state, user: action.payload };
    case REMOVE_CURRENT_USER:
      return { ...state, user: null };
    default:
      return state;
  };
};

export default currentUserReducer;
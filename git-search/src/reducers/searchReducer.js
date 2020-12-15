import {
  UPDATE_SEARCH_USER,
  UPDATE_CHOOSEN_USER,
  UPDATE_USERS_LIST,
} from "../actions/actionTypes";

const initialState = {
  temporaryUser: "",
  choosenUser: "",
  usersList: [],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_USER:
      return {
        ...state,
        temporaryUser: action.temporaryUser,
      };
    case UPDATE_CHOOSEN_USER:
      return {
        ...state,
        choosenUser: action.choosenUser,
      };
    case UPDATE_USERS_LIST:
      return {
        ...state,
        usersList: action.usersList,
      };
    default:
      return state;
  }
};

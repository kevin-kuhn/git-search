import { UPDATE_SEARCH_USER } from '../actions/actionTypes';

const initialState = {
    temporaryUser: ''
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_USER:
            return {
                ...state,
                temporaryUser: action.temporaryUser
            }
        default:
            return state;
    }
}
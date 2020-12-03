import { UPDATE_TITLE } from '../actions/actionTypes';

const initialState = {
    newTitle: ''
}

export const titleReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TITLE:
            return {
                ...state,
                newTitle: action.newTitle
            }
        default:
            return state;
    }
}
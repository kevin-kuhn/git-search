import { UPDATE_SEARCH_USER, UPDATE_TITLE } from './actionTypes';

export const searchUser = value => ({
    type: UPDATE_SEARCH_USER,
    temporaryUser: value
})

export const changeName = value => ({
    type: UPDATE_TITLE,
    newTitle: value
})
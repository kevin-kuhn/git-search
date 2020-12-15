import { UPDATE_SEARCH_USER, UPDATE_TITLE, UPDATE_CHOOSEN_USER, UPDATE_USERS_LIST } from './actionTypes';

export const searchUser = value => ({
    type: UPDATE_SEARCH_USER,
    temporaryUser: value
})

export const setChoosenUser = value => ({
    type: UPDATE_CHOOSEN_USER,
    choosenUser: value
})

export const setUsersList = value => ({
    type: UPDATE_USERS_LIST,
    usersList: value
})


export const changeName = value => ({
    type: UPDATE_TITLE,
    newTitle: value
})
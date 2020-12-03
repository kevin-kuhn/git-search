import { searchReducer } from './searchReducer'
import { titleReducer } from './titleReducer'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
  searchState: searchReducer,
  titleState: titleReducer
});
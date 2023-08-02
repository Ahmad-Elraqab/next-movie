import { combineReducers } from "redux";
import moviesReducer from './movie_reducer'
import commonReducer from './common_reducer'

export default combineReducers({
    movies: moviesReducer,
    common: commonReducer,
});
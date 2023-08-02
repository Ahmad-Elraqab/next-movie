import { MOVIE_ACTIONS } from "../actions/movie_actions";

const initialState = {
    movies: [],
    error: null,
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_ACTIONS.NEW_MOVIES:
            return {
                ...state,
                error: null,
                movies: action.payload,
            };
        case MOVIE_ACTIONS.ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case MOVIE_ACTIONS.SEARCHED_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };
        default:
            return state;
    }
};

export default moviesReducer;

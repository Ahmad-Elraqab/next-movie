import { COMMON_ACTIONS } from "../actions/movie_actions";

const initialState = {
    error: null,
};

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        // case MOVIE_ACTIONS.NEW_MOVIES:
        //     return {
        //         ...state,
        //         error: null,
        //         movies: action.payload,
        //     };
        default:
            return state;
    }
};

export default commonReducer;

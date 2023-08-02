import { MovieUseCases } from '../../../domain/usecases/movies_usecases.js';

export const MOVIE_ACTIONS = {
    NEW_MOVIES: 'new_movies',
    SEARCHED_MOVIES: 'searched_movies',
    ERROR: 'error',
}

const movieUseCases = new MovieUseCases();

export const action = (type, payload) => ({
    type: type,
    payload: payload,
});

export const fetchNewMovies = () => async (dispatch) => {

    try {

        const movies = await movieUseCases.getNewMovies();

        dispatch(action(MOVIE_ACTIONS.NEW_MOVIES, movies));

    } catch (error) {

        dispatch(action(MOVIE_ACTIONS.ERROR, error.message ?? 'something went wrong!'));
    }
};

export const fetchMoviesByTheaterName = (theater_name, d_date) => async (dispatch) => {

    try {

        const movies = await movieUseCases.getMoviesByTheaterName(theater_name, d_date);

        dispatch(action(MOVIE_ACTIONS.SEARCHED_MOVIES, movies));

    } catch (error) {

        dispatch(action(MOVIE_ACTIONS.ERROR, error.message ?? 'something went wrong!'));
    }
};

export const fetchMoviesByDate = (theater_name, d_date, s_date) => async (dispatch) => {

    try {

        const movies = await movieUseCases.getMoviesByDate(theater_name, d_date, s_date);

        dispatch(action(MOVIE_ACTIONS.SEARCHED_MOVIES, movies));

    } catch (error) {

        dispatch(action(MOVIE_ACTIONS.ERROR, error.message ?? 'something went wrong!'));
    }
};

export const errorMsg = () => async (dispatch) => {

    dispatch(action(MOVIE_ACTIONS.ERROR, 'something went wrong!'));
};

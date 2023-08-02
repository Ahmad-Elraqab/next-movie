import { MovieRepository } from '../../data/repositories/movie_repository.js';

export class MovieUseCases {
    constructor() {
        this.movieRepository = new MovieRepository();
    }

    async getNewMovies() {
        return this.movieRepository.getNewMovies();
    }

    async getMoviesByTheaterName(theater_name, d_date) {
        return this.movieRepository.getMoviesByTheater(theater_name, d_date);
    }

    async getMoviesByDate(theater_name, d_date, s_date) {
        return this.movieRepository.getMoviesByTimeSlot(theater_name, d_date, s_date);
    }

}

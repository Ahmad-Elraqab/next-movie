
import { Movie } from "../../domain/entities/movie.js";
import { get } from '../data_sources/restful_api.js';

const movies = [];

export class MovieRepository {

    async getNewMovies() {

        const movies = await get(`new_movies`)

        return movies.data.map((movie) => new Movie(movie.Movie_ID, movie.Title, movie.Genre, movie.Duration, movie.Views, movie.Poster, movie.Overall_rating, movie.Description));;
    }

    async getMoviesByTheater(theater_name, d_date) {

        const movies = await get(`specific_movie_theater?theater_name=${theater_name}&d_date=${d_date}`)

        console.log(movies);
        return movies.data.map((movie) => new Movie(movie.Movie_ID, movie.Title, movie.Genre, movie.Duration, movie.Views, movie.Poster, movie.Overall_rating, movie.Description));;
    }

    async getMoviesByTimeSlot(theater_name, d_date, s_date) {

        const movies = await get(`timeslot?theater_name=${theater_name}&time_start=${s_date}&time_end=${d_date}`)

        console.log(movies);
        return movies.data.map((movie) => new Movie(movie.Movie_ID, movie.Title, movie.Genre, movie.Duration, movie.Views, movie.Poster, movie.Overall_rating, movie.Description));;
    }

    //TODO: GET - performer_name=Al Pacino
    async getMoviesByPerformer() {

        return movies;
    }

    //TODO: GET - genre?genre=comedy
    async getMoviesByGenre() {

        return movies;
    }


    //TODO: POST - add_movie/?title=The%20King%27s%20Man&release=2020-09-18&length=98&description=As%20a%20collection%20of%20history%27s%20worst%20tyrants%20and%20criminal%20masterminds%20gather%20to%20plot%20a%20war%20to%20wipe%20out%20millions%2C%20one%20man%20must%20race%20against%20time%20to%20stop%20them.&mpaa_rating=PG-13&genre=action&genre=adventure&genre=comedy&director=Matthew%20Vaughn&performer=Gemma%20Arterton&performer=Matthew%20Goode&performer=Ralph%20Fiennes&language=English
    async addMovie(movie) {

        movies.push(movie);

        return movie;
    }
    //TODO: POST - give_rating&?movie_title=The Irishman&?username=Ringo&?rating=10&?r_description=A masterpiece!
    async giveRating(movie) {

        movies.push(movie);

        return movie;
    }
}



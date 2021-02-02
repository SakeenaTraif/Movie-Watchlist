import movies from "../movies";
import slugify from "slugify";

const initialState = {
  movies: movies,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter(
          (movie) => movie.id !== action.payload.movieId
        ),
      };

    case "ADD_MOVIE":
      const { newMovie } = action.payload;
      newMovie.slug = slugify(newMovie.name, { lower: true });
      newMovie.id = state.movies[state.movies.length - 1].id + 1;
      return {
        ...state,
        movies: [...state.movies, newMovie],
      };

    default:
      return state;
  }
};

export default reducer;

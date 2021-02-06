export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const UPDATE_MOVIE = "UPDATE_MOVIE";

export const deleteMovie = (movieId) => ({
  type: DELETE_MOVIE,
  payload: { movieId: movieId },
});

export const addMovie = (newMovie) => ({
  type: ADD_MOVIE,
  payload: { newMovie },
});

export const updatedMovie = (updatedMovie) => {
  return {
    type: UPDATE_MOVIE,
    payload: { updatedMovie },
  };
};

import { useState, useSelector } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/actions";

import AddButton from "./buttons/AddButton";

const InputForm = () => {
  const [movie, setMovie] = useState({
    name: "",
  });
  // const { movieSlug } = useParams();

  const dispatch = useDispatch();

  // const foundMovies = useSelector((state) =>
  //   state.movies.find((movie) => movies.slug === movieSlug)
  // );

  const handleChnage = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const restForm = () => {
    setMovie({
      name: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMovie(movie));
    restForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Movie:
          <input
            name="name"
            value={movie.name}
            type="text"
            placeholder="Enter the movie name"
            onChange={handleChnage}
          ></input>
          <AddButton type="submit" value="Submit"></AddButton>
        </label>
      </form>
    </div>
  );
};

export default InputForm;

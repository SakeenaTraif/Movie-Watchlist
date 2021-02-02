import { useSelector } from "react-redux";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { AddButtonStyled, DeleteButtonStyled, InlineButtons } from "../styles";
import MovieItem from "./MovieItem";
import DeleteButton from "./buttons/DeleteButton";
import WatchedButton from "./buttons/WatchedButton";

const Watchlist = () => {
  const [query, setQuery] = useState("");
  const movies = useSelector((state) => state.movies);

  const watchedList = movies
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => (
      <div>
        <MovieItem movie={movie} key={movie.id}></MovieItem>
        <div>
          <WatchedButton>Watched</WatchedButton>
          <DeleteButton movieId={movie.id}>Delete</DeleteButton>
        </div>
      </div>
    ));

  return (
    <div>
      <h2>WatchList</h2>
      <SearchBar setQuery={setQuery}></SearchBar>
      {watchedList}
    </div>
  );
};

export default Watchlist;

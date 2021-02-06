import { useSelector } from "react-redux";
import { useState } from "react";
import SearchBar from "./SearchBar";
import DeleteButton from "./buttons/DeleteButton";
import WatchedButton from "./buttons/WatchedButton";

const WatchList = () => {
  const [query, setQuery] = useState("");

  const movies = useSelector((state) => state.movies);

  const watchedList = movies
    .filter(
      (movie) =>
        movie.watch === false &&
        movie.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((movie) => (
      <div>
        <div movie={movie} key={movie.id}></div>
        {movie.name}
        <div>
          <WatchedButton movie={movie}></WatchedButton>
          <DeleteButton movieId={movie.id}>Delete</DeleteButton>
        </div>
      </div>
    ));

  return (
    <div>
      <h2>{`Watch List -- ${watchedList.length}`}</h2>
      <SearchBar setQuery={setQuery}></SearchBar>

      <div>{watchedList.length === 0 ? "No movies to show!" : watchedList}</div>
    </div>
  );
};

export default WatchList;

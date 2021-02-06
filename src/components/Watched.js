
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { useState } from "react";
import DeleteButton from "./buttons/DeleteButton";
import UnwatchedButton from "./buttons/UnwatchedButton";

const Watched = () => {
  const [query, setQuery] = useState("");
  const movies = useSelector((state) => state.movies);
  const unwatchedList = movies
    .filter(
      (movie) =>
        movie.watch === true &&
        movie.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((movie) => (
      <div>
        <div movie={movie} key={movie.id}>
          <p>{movie.name}</p>
        </div>
        <div>
          <UnwatchedButton movie={movie}>Unwatched</UnwatchedButton>
          <DeleteButton movieId={movie.id}>Delete</DeleteButton>
        </div>
      </div>
    ));
  return (
    <div>
      <h2>{`Watched List -- ${unwatchedList.length}`} </h2>
      <SearchBar setQuery={setQuery}></SearchBar>
      {unwatchedList}
    </div>
  );
};

export default Watched;

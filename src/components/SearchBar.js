import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
    return (
      <SearchBarStyled
        onChange={(event) => props.setQuery(event.target.value)}
        placeholder="Search for a movie name"
      />
    );
  };
  
  export default SearchBar;
  
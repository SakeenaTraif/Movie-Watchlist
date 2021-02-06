import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import InputForm from "./components/InputForm";
import {
  GlobalStyle,
  AppWrapper,
  WatchListWrapper,
  UnwatchListWrapper,
} from "./styles";
import movies from "./movies";

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <InputForm />
      <WatchListWrapper>
        {movies.length > 0 ? <WatchList /> : "No Movies To Show"}
      </WatchListWrapper>
      <UnwatchListWrapper>
        <Watched />
      </UnwatchListWrapper>
    </AppWrapper>
  );
}

export default App;

import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import InputForm from "./components/InputForm";
import { useState } from "react";
import movies from "./movies";

function App() {
  return (
    <div>
      <InputForm />
      <Watchlist />
    </div>
  );
}

export default App;

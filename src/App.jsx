import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/Context";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:query/:startIndex" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;

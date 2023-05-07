
import "./components/MovieList.css"
import "./components/Trending.css"
import "./components/Popular.css"
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Genre from "./pages/Genre";
import Search from "./pages/Search";
import Trailers from "./pages/Trailers";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/genre/:name/:id" element={<Genre />} />
      <Route path="/search/:name" element={<Search />} />
      <Route path="/Trailers/:id" element={<Trailers />} />
    </Routes>
  );
}
 
export default App;

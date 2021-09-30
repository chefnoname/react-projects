import { useContext } from "react";
import { MovieCtx } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieCtx);
  return (
    <nav>
      <div className="nav-links">
        <h3>Chef ibn Ahmed</h3>
        <p>List of Movies: {movies.length}</p>
      </div>
    </nav>
  );
};

export default Nav;

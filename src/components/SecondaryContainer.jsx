import {useSelector} from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () =>{
    const movies = useSelector(store => store.movies);
    return (
      <div className="bg-black -mt-12 relative x-20 w-screen">

          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.PopularMovies} />
          <MovieList
            title={"Upcoming Movie"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList title={"Horror Movie"} movies={movies.nowPlayingMovies} />
        </div>
    );
};

export default SecondaryContainer;

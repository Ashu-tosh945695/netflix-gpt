
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p>No movies to display.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl py-4 font-bold text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;




// import MovieCard from "./MovieCard";

// const MovieList = ({title, movies}) =>{
// console.log(movies)
//     return (
//       <div className="p-6">
//         <h1 className="text-4xl font-bold">{title}</h1>
//         <div className="flex overflow-x-scroll">
//           <div className="flex">
//             {/* {movies.map((movie) => (
//               <MovieCard key={movie.id} posterPath={movie.poster_path} />
//            ))} */}
//             {movies.map((movie) => (
//               <MovieCard key={movie.id} movie={movie} />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
// };
// export default MovieList;

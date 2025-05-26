import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {

  useNowPlayingMovies();

   return (
     <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
       <Header />
       <MainContainer/>
       <SecondaryContainer/>
     </div>
   );
}
export default Browse;
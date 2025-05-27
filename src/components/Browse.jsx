import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {

  const showGptSearch = useSelector(store=> store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
   return (
     <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
       <Header />

       {showGptSearch ? (
         <GptSearch />
       ) : (
         <>
           <MainContainer />
           <SecondaryContainer />
         </>
       )}

       {/* <MainContainer />
       <SecondaryContainer /> */}
     </div>
   );
}
export default Browse;
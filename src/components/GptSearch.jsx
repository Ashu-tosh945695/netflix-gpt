import GptMovieSuggestion from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar"
const GptSearch =()=>{
    return (
      <div>
        <div className="absolute w-screen h-screen -z-10">
          <img src="/assets/background_banner.jpg" alt="logo" />
        </div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    );
};
export default GptSearch;
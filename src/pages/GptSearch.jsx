import React from "react";

import GptSearchBar from "../components/GptSearchBar";
import GptSearchSuggestions from "../components/GptSearchSuggestions";
import NETFLIX_BG from "../assets/Netflix_Bg.jpg";

const GptSearch = () => {
  return (
    <div
      className="min-h-screen p-10 pt-40 text-white"
      style={{
        backgroundImage: `url(${NETFLIX_BG})`,
        backgroundAttachment: "fixed",
      }}
    >
      <GptSearchBar />
      <GptSearchSuggestions />
    </div>
  );
};

export default GptSearch;

import React from "react";
import { useRef } from "react";
import useGpt from "../hooks/useGpt";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const { handleGptSearch } = useGpt();

  return (
    <div className="text-center">
      <form
        className="inline-block rounded-md bg-black p-4 text-white"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          className="mr-5 w-[400px] rounded-md px-6 py-4 text-black"
          type="text"
          placeholder="What wound you like to watch?"
          ref={searchText}
        />
        <button
          className="rounded-md bg-red-700 px-6 py-4 font-medium"
          onClick={() => handleGptSearch(searchText.current.value)}
        >
          Search!
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

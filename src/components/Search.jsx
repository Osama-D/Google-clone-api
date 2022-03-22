import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultsContentProvider";
import { GoSearch } from "react-icons/go";
import { useHistory } from "react-router-dom";
import { Router } from "react-router-dom/cjs/react-router-dom.min";

function Search() {
  const [text, setText] = useState("Elon Musk");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);
  let history = useHistory();
  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
      history.replace(`/search?search=${text}`);
    }
  }, [debouncedValue]);

  return (
    <div className="flex justify-center tall:mt-6 relative items-center w-5/12 tall:w-10/12		">
      <input
        className="w-full tall:w-full dark:placeholder-gray-200 dark:bg-gray-800 tall:mr10 tall:mr-0 mr-12 outline-0	p-4 pl-6 flex justify-center 	drop-shadow-2xl rounded       h-16"
        type="text"
        value={text}
        placeholder="Google"
        onChange={(e) => setText(e.target.value)}
        // onClick={onClick}
      />

      <GoSearch className="absolute cursor-pointer dark:text-gray-200 text-blue-600 tall:right-12 right-20 h-24 w-6" />
    </div>
  );
}

export default Search;

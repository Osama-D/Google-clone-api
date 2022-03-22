import React, { createContext, useContext, useState } from "react";
const ResultContext = createContext();
const baseUrl = "https://www.googleapis.com/customsearch/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  let [count, setcount] = React.useState(0);
  const [isLoading, setisLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("google");
  //videos, /search..
  const getResults = async (type) => {
    setisLoading(true);

    var APIKEY = process.env.REACT_APP_API_KEY;
    var cx = "25707b000e89f41f7";

    const response = await fetch(
      `${baseUrl}?key=${APIKEY}&cx=${cx}&q=${type}&safe=active&start=${count}`
    );

    const data = await response.json();

    setResults(data);
    setcount(data.queries.nextPage[0].count - 10);
    setisLoading(false);
  };
  return (
    <ResultContext.Provider
      value={{
        getResults,
        results,
        searchTerm,
        setSearchTerm,
        isLoading,
        count,
        setcount,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};
export const useResultContext = () => useContext(ResultContext);

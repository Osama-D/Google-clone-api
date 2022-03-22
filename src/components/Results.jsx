import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import Footer from "../components/Footer.jsx";
import Pagination from "../components/Pagination.js";
import { useResultContext } from "../contexts/ResultsContentProvider";
import { BsCircle } from "react-icons/bs";
import Loading from "./Loading";

function Results() {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();
  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "./videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}&q=${searchTerm}&num=10`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  console.log(location.pathname);

  switch (location.pathname) {
    case `/search`:
      return (
        <div className="flex-wrap justify-start ned:pr-0 ned:pl-0 pr-[600px] pl-[100px] space-y-6 mt-12 sm:px-10 lg:px-64">
          {results?.items?.map(({ link, title, snippet, pagemap }, index) => (
            <div
              key={index}
              className=" p-12 items-center flex justify-start my-0 mx-auto flex-wrap dark:bg-gray-800  bg-white rounded-lg shadow "
            >
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-[25px]  inline-block items-center font-body hover:underline dark:text-blue-500 text-blue-700">
                  <BsCircle
                    className=" inline-block dark:text-blue-500  x items-start justify-start w-4 h-4 mr-4
                    "
                  />
                  {title}
                </p>
                <p className="text-lg flex justify-start font-body mt-4 dark:text-gray-300  text-gray-800">
                  {snippet}
                  <img src={pagemap?.cse_image?.src} alt="" />
                </p>
              </a>
            </div>
          ))}
          <Pagination />
          <Footer />
        </div>
      );
    case `term?${searchTerm}`:
      return (
        <div className="flex-wrap justify-start ned:pr-0 ned:pl-0 pr-[600px] pl-[100px] space-y-6 mt-12 sm:px-10 lg:px-64">
          {results?.items?.map(({ link, title, snippet, pagemap }, index) => (
            <div
              key={index}
              className=" p-12 items-center flex justify-start my-0 mx-auto flex-wrap dark:bg-gray-800  bg-white rounded-lg shadow "
            >
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-[25px]  inline-block items-center font-body hover:underline dark:text-blue-500 text-blue-700">
                  <BsCircle
                    className=" inline-block dark:text-blue-500  x items-start justify-start w-4 h-4 mr-4
                    "
                  />
                  {title}
                </p>
                <p className="text-lg flex justify-start font-body mt-4 dark:text-gray-300  text-gray-800">
                  {snippet}
                  <img src={pagemap?.cse_image?.src} alt="" />
                </p>
              </a>
            </div>
          ))}
          <Pagination />
          <Footer />
        </div>
      );
    case "/images":
      return (
        <div className="">
          <div className="flex justify-center  dark:bg-gray-800 bg-gray-200 w-[400px] mt-[80px] shadow-lg rounded-lg font-body uppercase my-0 mx-auto h-[100px] items-center text-lg">
            couldnt find an api
          </div>

          <Footer />
        </div>
      );
    case "/news":
      return (
        <div className="">
          <div className="flex justify-center  dark:bg-gray-800 bg-gray-200 w-[400px] mt-[80px] shadow-lg rounded-lg font-body uppercase my-0 mx-auto h-[100px] items-center text-lg">
            couldnt find an api
          </div>

          <Footer />
        </div>
      );
    case "/videos":
      return (
        <div className="">
          <div className="flex justify-center  dark:bg-gray-800 bg-gray-200 w-[400px] mt-[80px] shadow-lg rounded-lg font-body uppercase my-0 mx-auto h-[100px] items-center text-lg">
            couldnt find an api
          </div>

          <Footer />
        </div>
      );

    default:
      return "ERROR";
  }
}

export default Results;

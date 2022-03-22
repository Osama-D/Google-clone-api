import React from "react";
import { Link } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";
import { TiAdjustBrightness } from "react-icons/ti";
import { MdVerified } from "react-icons/md";
import Search from "./Search";
import img from "../components/image.jpg";
import Linkss from "./Linkss";
import { useResultContext } from "../contexts/ResultsContentProvider";
function Nav({ dartTheme, setDarkTheme }) {
  const { results, isLoading, getResults, searchTerm } = useResultContext();

  return (
    <div className="py-6   font-body dark:bg-gray-900 bg-blue-600 flex flex-wrap tall:pt-20  items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between   tall:justify-evenly items-center  w-screen">
        <Link
          className="flex items-center tall:absolute  tall:top-5 tall:left-0  justify-center "
          to="/"
        >
          <p className="text-2xl sm:text-red-400  w-44 h-16 rounded-r-[2000px]  flex justify-end pr-14 items-center  rounded-[50px]  bg-blue-800 font-bold text-white dark:bg-gray-800 dark:text-gray-200">
            Google
          </p>
          <span className="bg-white w-12  h-12 tall:absolute absolute left-36 rounded-full inline-block  ">
            <svg
              className="mx-auto my-[16px] w-4 h-4 fill-blue-600 dark:fill-gray-800 "
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="980.000000pt"
              height="980.000000pt"
              viewBox="0 0 980.000000 980.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,980.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path
                  d="M2095 9793 c-543 -47 -1042 -279 -1425 -663 -874 -873 -893 -2267
-43 -3160 375 -394 860 -637 1398 -699 58 -7 524 -11 1303 -11 l1212 0 0 1213
c0 1246 -1 1292 -42 1497 -173 886 -892 1607 -1781 1784 -194 39 -443 55 -622
39z"
                />
                <path
                  d="M7300 9789 c-140 -15 -337 -58 -477 -104 -727 -239 -1304 -853 -1492
-1588 -70 -271 -65 -169 -69 -1570 l-3 -1268 1268 4 c1396 3 1305 -1 1567 67
740 190 1351 765 1591 1493 267 813 54 1700 -555 2307 -347 348 -788 572
-1270 645 -126 19 -442 27 -560 14z"
                />
                <path
                  d="M1990 4525 c-520 -68 -989 -305 -1352 -684 -553 -577 -762 -1373
-562 -2141 206 -789 835 -1418 1624 -1624 1335 -348 2669 571 2829 1949 7 58
11 524 11 1303 l0 1212 -1227 -1 c-914 -1 -1252 -4 -1323 -14z"
                />
                <path
                  d="M5262 3273 c4 -1401 -1 -1299 69 -1570 102 -401 327 -780 637 -1074
895 -851 2290 -833 3162 41 610 610 822 1494 555 2307 -240 729 -851 1302
-1591 1493 -262 68 -171 64 -1567 67 l-1268 4 3 -1268z"
                />
              </g>
            </svg>
          </span>
          <img
            className="rounded-full ml-8 object-cover	w-12 h-12"
            src={img}
            alt="img"
          />
        </Link>
        <Search />
        <button
          type="button"
          onClick={() => setDarkTheme(!dartTheme)}
          className="
          tall:absolute
          tall:top-5
          tall:right-6
          text-[28px]
          dark:bg-gray-800
          dark:text-gray-200
          h-16
          w-16
          flex justify-center
items-center          shadow-full
          rounded-full
    bg-white
    tall:mr-0
          mr-10
          px-[0.5px]
          py-[0.5px] hover:shadow-lg"
        >
          {dartTheme ? (
            <BsFillMoonFill className="text-[18px] transition ease-in-out delay-1500" />
          ) : (
            <TiAdjustBrightness className="  transition ease-in-out delay-1500	  text-blue-600 " />
          )}
        </button>
      </div>

      <div className="text-white mt-12 tall:mt-8 ned:block  relative flex justify-center w-full">
        <div className="ml-16 ned:ml-0 ned:flex ned:justify-center ned:m-0">
          <Linkss />
        </div>
        <div className=" absolute ned:relative ned:pr-32 ned:pt-10 left-10 flex items-center">
          <MdVerified className="  mx-4 w-6  h-6" />
          We dug up {results.searchInformation?.formattedTotalResults} Results (
          {results.searchInformation?.formattedSearchTime} Seconds)
        </div>
      </div>
    </div>
  );
}

export default Nav;

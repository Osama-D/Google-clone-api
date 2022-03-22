import React, { useEffect } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { useResultContext } from "../contexts/ResultsContentProvider";
function Pagination() {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const { count, setcount } = useResultContext();
  const [page, setpage] = React.useState(0);
  const history = useHistory();
  const { setSearchTerm } = useResultContext();

  useEffect(() => {
    history.replace(`/search?page=${count}`);
  }, [count]);
  return (
    <div className="flex justify-center p-10 ned:pr-0 ned:pl-0 pl-[100px] ">
      {page <= 10 && (
        <Link to="/">
          <button
            onClick={() => setcount(count)}
            className="flex justify-center items-center px-10 cursor-pointer hover:text-blue-600"
          >
            {" "}
            <AiOutlineDoubleRight className="rotate-180	text-[30px] text-blue-600 " />
            <p className="px-6 ">Previous</p>
          </button>
        </Link>
      )}
      {count >= page && (
        <Link to="/">
          <button
            onClick={() => setcount(count + 10)}
            className="flex justify-center items-center  px-10 cursor-pointer  hover:text-blue-600"
          >
            {" "}
            <p className="px-6">Next</p>
            <AiOutlineDoubleRight className="	text-[30px] text-blue-600" />
          </button>
        </Link>
      )}
    </div>
  );
}

export default Pagination;

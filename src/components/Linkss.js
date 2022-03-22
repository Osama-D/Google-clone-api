import React from "react";
import { NavLink } from "react-router-dom";
const links = [
  {
    url: "/search",
    text: "All",
  },
  { url: "/news", text: "News" },
  {
    url: "/images",
    text: "Images",
  },
  { url: "/videos", text: "Videos" },
];
function Linkss() {
  return (
    <div>
      {links.map(({ url, text }, index) => (
        <NavLink
          key={index}
          to={url}
          activeClassName="text-white px-8 border-b-2 "
          className="py-4 px-4"
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
}

export default Linkss;

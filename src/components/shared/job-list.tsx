import React from "react";
import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function JobsList(_props) {
  const { data, design } = _props;
  // design it becomes two either full or half
  const { title, companyName, city, skills, description, jobType, id } = data;

  return design === "full" ? (
    <div className="flex flex-col gap-4 mt-8 bg-secondary rounded-md p-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47 20"
            className="injected-svg w-14 h-10 md:w-18 md:h-8 fill-white"
            data-src="/img/logo.svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              fillRule="nonzero"
              d="M11.975 8.037A7.011 7.011 0 0114 12.977c0 3.84-3.072 6.96-6.884 7.022l-.08.001h-5.96a1.12 1.12 0 01-1.07-1.013l-.004-.043L0 18.88v-6.487h6.238l.099-.001a5.965 5.965 0 005.638-4.354zM24.853 6.05h.02c.653.004 1.18.186 1.581.548.398.366.596.833.596 1.4 0 .63-.245 1.136-.736 1.517.475.14.845.387 1.11.74.265.355.398.78.398 1.278 0 .654-.222 1.186-.667 1.599-.444.412-1.036.618-1.776.618H22.2v-7.7h2.653zm7.545 0v7.7h-.912v-7.7h.912zm4.729 0l1.916 2.998 1.905-2.998H42l-2.43 3.768 2.617 3.932h-1.063l-2.08-3.162-2.093 3.162h-1.063l2.653-3.943-2.466-3.757h1.052zm9.473 0v7.7h-.912v-7.7h.912zm-21.315 4.037h-2.173v2.846h2.173c.5 0 .889-.128 1.17-.385.288-.256.432-.602.432-1.038 0-.436-.143-.782-.427-1.038-.284-.257-.676-.385-1.175-.385zM5.973 0a5.977 5.977 0 015.974 5.981 5.978 5.978 0 01-5.875 5.98l-.099.002H0V5.882A5.977 5.977 0 015.974 0zM24.76 6.867h-1.648v2.391h1.648c.436 0 .77-.107 1.005-.32.233-.214.35-.508.35-.881 0-.374-.117-.665-.35-.875-.234-.21-.57-.315-1.005-.315z"
            ></path>
          </svg>
          <h1 className="text-white">{companyName}</h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-white">{title}</h1>
          <p
            className="text-gray-400 text-lg font-thin mt-4
        line-clamp-3"
          >
            {description}
          </p>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-xl text-white" />
              <p className="text-gray-400 text-lg font-thin">{city}</p>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineCalendar className="text-xl text-white" />
              <p className="text-gray-400 text-lg font-thin">2 days ago</p>
            </div>
          </div>
        </div>
        <Link to={`/jobs/${id}`} className="flex justify-end">
          <button className="bg-blue-600 p-3 rounded text-white mt-4 active:bg-blue-700">
            See more..
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <Link to={`/jobs/${id}`}>
      <div className="flex flex-col cursor-pointer hover:bg-secondary/60 gap-4 mt-8 bg-secondary rounded-md p-4">
        <div className="flex items-center justify-between gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47 20"
            className="injected-svg w-14 h-10 md:w-18 md:h-8 fill-white"
            data-src="/img/logo.svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              fillRule="nonzero"
              d="M11.975 8.037A7.011 7.011 0 0114 12.977c0 3.84-3.072 6.96-6.884 7.022l-.08.001h-5.96a1.12 1.12 0 01-1.07-1.013l-.004-.043L0 18.88v-6.487h6.238l.099-.001a5.965 5.965 0 005.638-4.354zM24.853 6.05h.02c.653.004 1.18.186 1.581.548.398.366.596.833.596 1.4 0 .63-.245 1.136-.736 1.517.475.14.845.387 1.11.74.265.355.398.78.398 1.278 0 .654-.222 1.186-.667 1.599-.444.412-1.036.618-1.776.618H22.2v-7.7h2.653zm7.545 0v7.7h-.912v-7.7h.912zm4.729 0l1.916 2.998 1.905-2.998H42l-2.43 3.768 2.617 3.932h-1.063l-2.08-3.162-2.093 3.162h-1.063l2.653-3.943-2.466-3.757h1.052zm9.473 0v7.7h-.912v-7.7h.912zm-21.315 4.037h-2.173v2.846h2.173c.5 0 .889-.128 1.17-.385.288-.256.432-.602.432-1.038 0-.436-.143-.782-.427-1.038-.284-.257-.676-.385-1.175-.385zM5.973 0a5.977 5.977 0 015.974 5.981 5.978 5.978 0 01-5.875 5.98l-.099.002H0V5.882A5.977 5.977 0 015.974 0zM24.76 6.867h-1.648v2.391h1.648c.436 0 .77-.107 1.005-.32.233-.214.35-.508.35-.881 0-.374-.117-.665-.35-.875-.234-.21-.57-.315-1.005-.315z"
            ></path>
          </svg>
          <h1 className="text-blue-500">{jobType}</h1>
        </div>

        <h1 className="text-white">{title}</h1>
        <p className="text-gray-300 line-clamp-2">{description}</p>
        <p className="text-blue-500">{city}</p>
      </div>
    </Link>
  );
}

import { useEffect, useState, useCallback } from "react";
import JobsList from "../components/shared/job-list";
import { useGlobalContext } from "../contexts/AppContext";
import { HiSearch } from "react-icons/hi";

export function JobsPage() {
  const { filteredJobs, filterBySearch, dispatch } = useGlobalContext();
  const [query, setQuery] = useState("");

  const handleChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  useEffect(() => {
    const handleSearch = () => {
      if (query) {
        filterBySearch(query);
      } else {
        dispatch({ type: "CLEAR_FILTERS" });
      }
    };
    handleSearch(); // Call the handleSearch function directly inside useEffect
    // Now, add the 'query' state as a dependency to useEffect
  }, [dispatch, query, filterBySearch]);

  return (
    <div className="bg-primary w-screen h-[100%]">
      <div className="mx-auto container px-2 flex flex-col py-4">
        <div className="flex flex-col mt-24">
          <h1 className="text-4xl font-bold text-white">
            Here are the <span className="text-blue-600">Jobs</span>
          </h1>
          <p className="text-gray-400 text-lg font-thin mt-4">
            Find the latest jobs in somalia
          </p>

          <div className="relative">
            <input
              onChange={handleChange}
              value={query}
              placeholder="Search for jobs here (location, title, description)"
              className="p-3 mt-4 text-white pl-9 w-full bg-transparent border border-blue-100 rounded-md focus:outline-none"
            />
            <HiSearch className="absolute top-8 left-3 text-gray-200 text-xl" />
          </div>
        </div>

        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4 mb-32">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((item, index) => (
              <JobsList design={"full"} key={index} data={item} />
            ))
          ) : (
            <h1 className="text-white text-2xl font-bold mt-4">
              No jobs found
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import JobsList from "../components/shared/job-list";
import { useGlobalContext } from "../contexts/AppContext";
import { HiX } from "react-icons/hi";

export function HomePage() {
  const [search, setSearch] = useState({
    query: "",
    location: "",
  });
  const { jobs, filterBySearch, filteredJobs, filterByLocation } =
    useGlobalContext();

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    filterBySearch(search.query);
    filterByLocation(search.location);
  };

  const handleClear = () => {
    setSearch({ query: "", location: "" });
    filterBySearch("404");
  };

  useEffect(() => {
    const handleSearch = () => {
      if (search.query.length > 0) {
        filterBySearch(search.query);
      } else if (search.location.length > 0) {
        filterByLocation(search.location);
      } else {
        filterBySearch("404");
      }
    };
    handleSearch();
  }, [search, filterBySearch, filterByLocation]);

  return (
    <main className="bg-[#151C24] w-screen">
      <div className="mx-auto container px-2 flex flex-col  py-4">
        <div className="">
          <div className="flex   flex-col mt-24">
            <h1 className="text-4xl font-bold text-white">
              Find the career you{" "}
              <span className="text-blue-600">deverse.</span>
            </h1>
            <p className="text-gray-400 text-lg font-thin mt-4">
              Som Jobs is a job for somalia. find the best jobs in somalia
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mt-8 bg-secondary rounded-sm p-4">
            <input
              name="query"
              onChange={handleChange}
              value={search.query}
              placeholder="Search for jobs"
              className="p-3 text-white w-full bg-transparent border border-blue-100 rounded-md focus:outline-none"
            />

            <input
              name="location"
              onChange={handleChange}
              value={search.location}
              placeholder="Location (Mogadishu)"
              className="p-3 text-white w-full bg-transparent border  border-blue-100 rounded-md focus:outline-none"
            />

            {/* <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-600 active:bg-blue-700 p-3 rounded text-white"
            >
              Search
            </button> */}
          </div>

          {/* show filtered in this section  */}
          {filteredJobs.length > 0 && (
            <div className="shadow-lg bg-secondary/60 mt-5 pt-6 p-4  ">
              <div className="flex justify-end w-full">
                <button
                  onClick={handleClear}
                  className="hover:bg-gray-900 p-2 rounded "
                >
                  <HiX className="text-white text-xl" />
                </button>
              </div>
              <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4">
                {filteredJobs.map((item, index) => (
                  <JobsList key={index} data={item} />
                ))}
              </div>
            </div>
          )}
          {/* </div> */}
        </div>

        {/* latest jobs */}
        <div className="flex flex-col mt-24">
          <h1 className="text-4xl font-bold text-white">
            Latest <span className="text-blue-600">Jobs</span>
          </h1>
          <p className="text-gray-400 text-lg font-thin mt-4">
            Find the latest jobs in somalia
          </p>

          {/* 
            icon of the company, job title, job description, location and apply now button
          */}
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4">
            {jobs
              .slice(0, 6)
              .sort((a, b) => b.id - a.id)
              .map((item, index) => (
                <JobsList design={"full"} key={index} data={item} />
              ))}
          </div>

          {/* subscribe our newsletter */}
          <div className="flex flex-col my-24">
            <h1 className="text-4xl font-bold text-white">
              Subscribe our <span className="text-blue-600">Newsletter</span>
            </h1>
            <p className="text-gray-400 text-lg font-thin mt-4">
              Subscribe our newsletter to get the latest jobs in somalia
            </p>

            <div className="flex flex-col lg:flex-row gap-4 mt-8 bg-secondary rounded-sm p-4  ">
              <input
                placeholder="Email"
                className="p-2 text-white w-full bg-transparent border border-blue-100 rounded-md focus:outline-none"
              />

              <button className="bg-blue-600 p-2 rounded text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

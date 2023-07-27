import JobsList from "../components/shared/job-list";
import jobs from "../data/jobs.json";

export function HomePage() {
  return (
    <main className="bg-[#151C24] h-full w-screen">
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
              placeholder="Search for jobs"
              className="p-3 text-white w-full bg-transparent border border-blue-100 rounded-md focus:outline-none"
            />

            <input
              placeholder="Location (Mogadishu)"
              className="p-3 text-white w-full bg-transparent border  border-blue-100 rounded-md focus:outline-none"
            />

            <button className="bg-blue-600 active:bg-blue-700 p-3 rounded text-white">
              Search
            </button>
          </div>
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
                <JobsList key={index} data={item} />
              ))}
          </div>

          {/* subscribe our newsletter */}
          <div className="flex flex-col mt-24">
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

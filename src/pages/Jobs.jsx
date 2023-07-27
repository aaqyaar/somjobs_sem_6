import JobsList from "../components/shared/job-list";
import jobs from "../data/jobs.json";

export function JobsPage() {
  return (
    <div className="bg-primary w-screen h-full">
      <div className="mx-auto container px-2 flex flex-col py-4">
        <div className="flex flex-col mt-24">
          <h1 className="text-4xl font-bold text-white">
            Here are the <span className="text-blue-600">Jobs</span>
          </h1>
          <p className="text-gray-400 text-lg font-thin mt-4">
            Find the latest jobs in somalia
          </p>
        </div>

        <div className="grid xl:grid-cols-3 mb-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4">
          {jobs.map((item, index) => (
            <JobsList key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

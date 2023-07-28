import { useParams } from "react-router-dom";
import { useGlobalContext } from "../contexts/AppContext";
import { HiArrowLeft, HiShieldCheck } from "react-icons/hi";
import { BiSolidTime, BiMoney } from "react-icons/bi";

export function JobPage() {
  const { slug } = useParams();
  const { jobs } = useGlobalContext();

  const job = jobs.find((job) => job.id === Number(slug));

  return (
    <div className="h-screen w-screen">
      <div className="px-2   pt-16 py-4">
        <div className="max-w-screen-sm mx-auto mb-10">
          <h1 className="inline-flex items-center gap-2 text-white">
            <HiArrowLeft
              className="text-white  text-2xl cursor-pointer"
              onClick={() => window.history.back()}
            />{" "}
            Back To <span className="text-gray-500">Jobs</span>
          </h1>
        </div>

        <div className="flex justify-center items-center flex-col">
          <img
            src="https://mydisabilityjobs.com/wp-content/uploads/2022/01/a-woman-is-completing-a-form.jpg"
            alt=""
            className="h-72 md:h-96 w-[40rem] rounded-lg"
          />

          <div className="flex flex-col mt-8">
            <div className="flex justify-between">
              <h1 className="text-4xl  font-bold text-white">{job.title}</h1>
              <h1 className="font-bold text-blue-600">{job.companyName}</h1>
            </div>
            <p className="text-gray-400  max-w-xl text-lg font-thin mt-5">
              {job.description}
            </p>
            <p className="text-white  max-w-xl inline-flex items-center gap-2 text-lg font-thin mt-5">
              <HiShieldCheck />
              Skills needed{" "}
              <span className="text-blue-400">{job.skills.join(" ")}</span>
            </p>
            <p className="text-white  max-w-xl inline-flex items-center gap-2 text-lg font-thin mt-2">
              <BiSolidTime />
              Job Mode
              <span className="text-blue-400">{job.jobType}</span>
            </p>

            <p className="text-white  max-w-xl inline-flex items-center gap-2 text-lg font-thin mt-2">
              <BiMoney />
              Job Salary based on your experience
              <span className="text-blue-400">$55K - $75K</span>
            </p>
            {/* job mode <part-time or full time, budget  */}
          </div>

          <div className="w-full md:w-[38rem] mt-8 justify-end flex">
            <button className=" bg-blue-600 p-3 rounded text-white mt-4 active:bg-blue-700">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

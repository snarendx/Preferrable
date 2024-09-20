import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {
  FaClipboardCheck,
  FaClipboardList,
  FaHandsHelping,
  FaBook,
} from "react-icons/fa";

const Jobs = () => {
  const navigate = useNavigate();

  const handleJobClick = () => {
    navigate("/JobDetails");
  };

  return (
    <div>
      <main className="container mx-auto py-8 px-4 md:px-8 lg:px-16">
        <div className="bg-[#3F3D56] p-8 rounded-md">
          <h1 className="text-2xl md:text-3xl text-white font-bold mb-4">
            Find Better Through ACCESS, Better CONNECTIONS, Better Jobs.
          </h1>
          <p className="text-white text-sm md:text-base">
            Preferable helps you find the perfect job for you
          </p>

          <div className="flex flex-col md:flex-row items-center p-4 rounded-md space-y-4 md:space-y-0 md:space-x-4 bg-[#2F2C4F] mt-4">
            <input
              type="text"
              placeholder="Job Title, Keywords, or Company Name"
              className="p-2 w-full md:w-auto flex-grow rounded border-none"
            />

            <div className="relative flex items-center w-full md:w-auto">
              <FaLocationDot className="absolute left-3 text-gray-500" />
              <input
                type="text"
                placeholder="City or State"
                className="p-2 pl-10 w-full flex-grow rounded border-none"
              />
            </div>

            <select className="p-2 w-full md:w-auto flex-grow rounded border-none bg-white">
              <option value="experience">Experience</option>
              <option value="fresher">Fresher</option>
              <option value="internship">Internship</option>
              <option value="payroll">Payroll</option>
            </select>
          </div>

          <button className="bg-[#657ED4] mt-4 text-white py-2 px-4 rounded">
            Find Jobs
          </button>
        </div>

        <section className="flex flex-col bg-white mt-10 md:flex-row">
          <aside className="w-full md:w-1/4 bg-gray-200 p-4 mt-4 md:mt-0 rounded-3xl">
            <ul className="space-y-4 text-center md:text-left">
              <li className="hover:underline cursor-pointer flex items-center">
                <FaClipboardCheck className="mr-2" /> Applied Jobs
              </li>
              <li className="hover:underline cursor-pointer flex items-center">
                <FaClipboardList className="mr-2" /> Skill Assessment
              </li>
              <li className="hover:underline cursor-pointer flex items-center">
                <FaHandsHelping className="mr-2" /> Job Assistance
              </li>
              <li className="hover:underline cursor-pointer flex items-center">
                <FaBook className="mr-2" /> Interview Prep
              </li>
            </ul>
          </aside>

          <div className="w-full md:w-3/4 bg-white md:ml-4">
            <div className="p-4 rounded-3xl shadow-md">
              {Array(5)
                .fill("")
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-center bg-blue-100 p-4 mb-4 rounded-md cursor-pointer"
                    onClick={handleJobClick}
                  >
                    <img
                      src="lenskart.jpg"
                      alt="Company Logo"
                      className="h-12 w-12 mb-4 md:mb-0 md:mr-4"
                    />
                    <div className="text-center md:text-left">
                      <h2 className="text-lg font-bold text-red-500">
                        Full Stack Developer
                      </h2>
                      <p>Lenskart</p>
                      <p>India (Remote)</p>
                      <p className="text-sm text-gray-500">3 hours ago</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>

    </div>
    
  );
};

export default Jobs;

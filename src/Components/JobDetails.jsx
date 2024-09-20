import React, { useState } from "react";
import Footer from "./Footer";

const JobDetails = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showNextPopup, setShowNextPopup] = useState(false);
  const [showSubmittedPopup, setShowSubmittedPopup] = useState(false);

  const handleApplyClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleNextClick = () => {
    setShowPopup(false);
    setShowNextPopup(true);
  };

  const handleCloseNextPopup = () => {
    setShowNextPopup(false);
  };

  const handleSubmitApplication = () => {
    setShowNextPopup(false);
    setShowSubmittedPopup(true);
  };

  const handleCloseSubmittedPopup = () => {
    setShowSubmittedPopup(false);
  };

  return (
    <div className="h-screen bg-gray-50">
      <header className="shadow p-4 bg-slate-700 flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex flex-wrap justify-center md:justify-start items-center space-x-2 space-y-2 md:space-y-0 w-full md:w-auto">
          <button className="bg-white text-gray-800 px-4 py-2 rounded-full text-xs md:text-sm">
            Date posted
          </button>
          <button className="bg-white text-gray-800 px-4 py-2 rounded-full text-xs md:text-sm">
            Experience level
          </button>
          <button className="bg-white text-gray-800 px-4 py-2 rounded-full text-xs md:text-sm">
            Company
          </button>
          <button className="bg-white text-gray-800 px-4 py-2 rounded-full text-xs md:text-sm">
            On-site/remote
          </button>
          <button className="bg-white text-gray-800 px-4 py-2 rounded-full text-xs md:text-sm">
            Easy Apply
          </button>
        </div>

        <div className="hidden md:block h-6 border-l border-gray-400 mx-4"></div>

        <button className="bg-white text-gray-800 px-4 py-2 rounded-full text-xs md:text-sm mt-4 md:mt-0">
          All Filters
        </button>
      </header>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-4 bg-gray-100 flex-grow">
          <div className="text-gray-700 mb-4">Jobs based on your profile</div>
          {Array(6)
            .fill()
            .map((_, index) => (
              <div key={index} className="bg-[#DCE1F6] p-4 rounded-lg mb-4">
                <div className="text-xl font-bold">Full Stack Developer</div>
                <div className="text-sm text-gray-600">Lenskart</div>
                <div className="text-sm text-gray-500">India (Remote)</div>
                <div className="text-sm text-green-500">3 hours ago</div>
              </div>
            ))}
        </div>

        <div className="w-full md:w-2/3 p-8 bg-white flex-grow">
          <h2 className="text-2xl font-bold mb-4">Full Stack Developer</h2>
          <div className="text-sm text-gray-600">Lenskart, Mumbai, India</div>
          <div className="text-sm text-green-500 mb-4">
            Remote - 3 hours ago
          </div>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full md:w-auto"
              onClick={handleApplyClick}
            >
              Apply
            </button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg w-full md:w-auto">
              Save
            </button>
          </div>
          <div>
            <h3 className="text-xl font-bold">About the job</h3>
            <p className="text-gray-700 mt-2">
              Lenskart is building a new product using MERN stack - an all in
              one business operation platform for SMEs. You will be the right
              fit, if you have a keen eye for details and high standards for
              code quality and efficiency, creating innovative new features and
              maintaining existing ones. Responsibilities: Developing user
              interface components and implementing them following well-known
              React.js workflows. Building reusable components and front-end
              libraries for future use. Optimizing components for maximum
              performance across a vast array of web-capable devices and
              browsers Integration of the front-end and back-end aspects of the
              web application Requirements: Min 2+ years of experience in
              developing modern web applications using MERN Stack and
              Typescript. Experience with MongoDB,Nodejs framework and Reactjs
              Strong proficiency in with OOPs concepts and Typescript Good
              understanding of Database schema, design, optimization,
              scalability. Great communication skills, a strong... work ethic.
              Ownership of the product from start to finish. Ability to learn
              new technologies quickly. You must be located in Bangalore and be
              able to come to office. *** Recommeded**** Experience with AWS,
              microservices,Devops Experience building mobile apps on MongoDB,
              GraphQL Expert level understanding of the HTML DOM and underlying
              event model Prior Open source contributions Experience building
              responsive designs Job Perks Get to work on new product from
              stratch implementing MERN stack on web and mobile. Open and
              embracing culture for the latest hot technologies. A competitive
              salary and holidays Company has roots in Silicon Valley, CA.
              Lenskart focuses on Enterprise Software, B2B, Small and Medium
              Businesses, and Startups.
            </p>
          </div>

          <div className="text-2xl mt-4">About The Company</div>

          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="lenskart.jpg"
                  alt="Lenskart Logo"
                  className="w-16 h-16"
                />
                <div className="ml-4">
                  <h2 className="text-2xl font-bold">Lenskart</h2>
                  <p className="text-gray-600">296,495 followers</p>
                </div>
              </div>
              <button className="bg-[#3626A7] hover:bg-[#3626A7] text-white font-bold py-2 px-4 rounded">
                Follow
              </button>
            </div>
            <p className="mt-4 text-gray-700">
              Lenskart is Asia's largest eyewear company serving 40 Million
              people - helping them see better and lead better quality lives. We
              have more than 1500 omnichannel stores across 175 cities in India,
              Singapore and Dubai. Our aim is to serve One Billion eyes by 2025
              globally. And in this journey, we want to go beyond vision
              correction to transform the way people see and experience the
              world. That's our new purpose - and we can only get there through
              cutting-edge technology and exceptional people
            </p>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-5/6 md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Apply to Lenskart</h2>
            <div>
              <h3 className="text-lg font-bold mb-2">Resume</h3>
              <p className="text-gray-600 mb-4">
                Be sure to include an updated resume
              </p>
              {Array(3)
                .fill()
                .map((_, index) => (
                  <div key={index} className="mb-4">
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="name of pdf.pdf"
                    />
                  </div>
                ))}
              <div className="flex justify-between mb-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={handleClosePopup}
                >
                  Upload resume
                </button>
                <button
                  className="text-blue-500 font-bold hover:text-blue-700"
                  onClick={handleClosePopup}
                >
                  Show 3 more resumes
                </button>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={handleClosePopup}
                >
                  Back
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                  onClick={handleNextClick}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />


      {showNextPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-5/6 md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Review your application</h2>
            <div>
              <h3 className="text-lg font-bold mb-2">Contact info</h3>
              <p className="text-gray-600 mb-4">
                Be sure to include an updated resume
              </p>
              <div className="mb-4">
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-md w-full"
                  onClick={handleCloseNextPopup}
                >
                  User profile card
                </button>
              </div>
              <div className="mb-4">
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-md w-full"
                  onClick={handleCloseNextPopup}
                >
                  Email Address
                  <br />
                  Mobile number
                </button>
              </div>
              <div className="mb-4">
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-md w-full"
                  onClick={handleCloseNextPopup}
                >
                  resume
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <button
                  className="text-blue-500 font-bold hover:text-blue-700"
                  onClick={handleCloseNextPopup}
                >
                  Show 3 more resumes
                </button>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={handleCloseNextPopup}
                >
                  Back
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                  onClick={handleSubmitApplication}
                >
                  Submit application
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSubmittedPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-5/6 md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Application Submitted</h2>
            <img src="Application.svg" alt="" />

            <p className="text-gray-600 mb-4">
              Your application has been successfully submitted to Lenskart.
            </p>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                onClick={handleCloseSubmittedPopup}
              >
                View More
              </button>
            </div>
            
          </div>
        </div>
        
      )}
    </div>
  );
};

export default JobDetails;

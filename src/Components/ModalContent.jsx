import React from "react";

const ModalContent = ({
  currentStep,
  formData,
  handleInputChange,
  handleModalSubmit,
  setCurrentStep,
  setIsModalOpen,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-300 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-lg font-semibold mb-6">
          {currentStep === 1 ? "Additional Information" : "Education"}
        </h2>
        <form className="space-y-4" onSubmit={handleModalSubmit}>
          {currentStep === 1 && (
            <>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3626A7]"
                />
              </div>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/3">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3626A7]"
                />
              </div>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3626A7]"
                />
              </div>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/3">
                  Experience
                </label>
                <div className="flex space-x-2 justify-between">
                  <button
                    type="button"
                    className={`px-4  py-2 bg-blue-100 rounded-lg ${
                      formData.experience === "Experienced" ? "bg-blue-300" : ""
                    }`}
                    onClick={() =>
                      handleInputChange({
                        target: { name: "experience", value: "Experienced" },
                      })
                    }
                  >
                    Experienced
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 bg-blue-100 rounded-lg ${
                      formData.experience === "Fresher" ? "bg-blue-300" : ""
                    }`}
                    onClick={() =>
                      handleInputChange({
                        target: { name: "experience", value: "Fresher" },
                      })
                    }
                  >
                    Fresher
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/3">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3626A7]"
                />
              </div>
              <div className="flex justify-between">
                <div className="items-center">
                  <label className="block text-sm font-medium text-gray-700 w-1/3">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-2 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3626A7]"
                  />
                </div>
                <div className="items-center">
                  <label className="block text-sm font-medium text-gray-700 w-1/3">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-2 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3626A7]"
                  />
                </div>
              </div>
              {/* <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/3">
                  Position
                </label>
                <input
                  type="text"
                  name="Position"
                  placeholder="Position"
                  value={formData.Position}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3626A7]"
                />
              </div> */}
            </>
          )}
          {currentStep === 2 && (
            <>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/3">
                  Position
                </label>
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3626A7]"
                />
              </div>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/3">
                  Course
                </label>
                <input
                  type="text"
                  name="course"
                  placeholder="Course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3626A7]"
                />
              </div>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/3">
                  Specialization
                </label>
                <input
                  type="text"
                  name="specialization"
                  placeholder="Specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3626A7]"
                />
              </div>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/3">
                  University
                </label>
                <input
                  type="text"
                  name="university"
                  placeholder="University"
                  value={formData.university}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3626A7]"
                />
              </div>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/3">
                  Key Skill
                </label>
                <input
                  type="text"
                  name="keySkill"
                  placeholder="Key Skill"
                  value={formData.keySkill}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3626A7]"
                />
              </div>
            </>
          )}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => {
                if (currentStep === 2) {
                  setCurrentStep(1);
                } else {
                  setIsModalOpen(false);
                }
              }}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg"
            >
              {currentStep === 1 ? "Cancel" : "Back"}
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              {currentStep === 1 ? "Next" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalContent;

import React from "react";

const PlanSelection = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 mt-8 mb-8">
      <div className="bg-gray-300 w-40 h-64 flex items-center justify-center rounded-lg shadow-lg">
        <p>Student Plan</p>
      </div>
      <div className="bg-gray-300 w-40 h-64 flex items-center justify-center rounded-lg shadow-lg">
        <p>TPO Plan</p>
      </div>
      <div className="bg-gray-300 w-40 h-64 flex items-center justify-center rounded-lg shadow-lg">
        <p>Corporate Plan</p>
      </div>
    </div>
  );
};

export default PlanSelection;

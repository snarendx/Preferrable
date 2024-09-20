import React, { useState } from "react";
import PlanSelection from "./PlanSelection";
import SignUpForm from "./SignUpForm";
import ModalContent from "./ModalContent";

const PlansAndSignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
    experience: "",
    company: "",
    startDate: "",
    endDate: "",
    // position: "",
    course: "",
    specialization: "",
    university: "",
    keySkill: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateFields = (fields) => {
    const errors = {};

    fields.forEach(({ name, value, message, validator }) => {
      if (!value || (validator && !validator(value))) {
        errors[name] = message;
      }
    });

    return errors;
  };

  const validateSignUp = () => {
    const { name, mobileNumber, email, password, confirmPassword, otp } =
      formData;

    const signUpFields = [
      { name: "name", value: name, message: "Name is required." },
      { name: "mobileNumber", value: mobileNumber, message: "Mobile number is required.", validator: (val) => /^[0-9]{10}$/.test(val) },
      { name: "email", value: email, message: "Email is required.", validator: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) },
      { name: "password", value: password, message: "Password is required." },
      { name: "confirmPassword", value: confirmPassword, message: "Confirm password is required." },
      { name: "otp", value: otp, message: "OTP is required.", validator: (val) => /^[0-9]{6}$/.test(val) },
    ];

    const errors = validateFields(signUpFields);

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateModalStep1 = () => {
    const { experience, company, startDate, endDate } = formData;
    const modalStep1Fields = [
      { name: "experience", value: experience, message: "Experience is required." },
      { name: "company", value: company, message: "Company is required." },
      { name: "startDate", value: startDate, message: "Start Date is required." },
      { name: "endDate", value: endDate, message: "End Date is required." },
    ];

    const errors = validateFields(modalStep1Fields);

    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      errors.endDate = "End Date must be after Start Date.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateModalStep2 = () => {
    const { position, course, specialization, university } = formData;
    const modalStep2Fields = [
      { name: "position", value: position, message: "Position is required." },
      { name: "course", value: course, message: "Course is required." },
      { name: "specialization", value: specialization, message: "Specialization is required." },
      { name: "university", value: university, message: "University is required." },
    ];

    const errors = validateFields(modalStep2Fields);

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      if (validateModalStep1()) {
        setCurrentStep(2);
      }
    } else {
      if (validateModalStep2()) {
        console.log(formData);
        setIsModalOpen(false);
        setCurrentStep(1);
        setErrors({});
      }
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (validateSignUp()) {
      setIsModalOpen(true);
      console.log(formData);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <PlanSelection />
      <SignUpForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSignUp={handleSignUp}
        errors={errors}
      />
      {isModalOpen && (
        <ModalContent
          currentStep={currentStep}
          formData={formData}
          handleInputChange={handleInputChange}
          handleModalSubmit={handleModalSubmit}
          setCurrentStep={setCurrentStep}
          setIsModalOpen={setIsModalOpen}
          setErrors={setErrors}
          errors={errors}
        />
      )}
    </div>
  );
};

export default PlansAndSignUp;

import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confrimPassword: "",
    accountType : ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [accountType,setAccountType] = useState("student")

  const changeHandler = (event) => {
    setFormData((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confrimPassword) {
      toast.error("Password do not match");
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max mt-6">
        <button onClick={() => setAccountType("student")}
         className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}>
            Student
        </button>

        <button onClick={() => setAccountType("instructor")}
        className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}>
            Instructor
        </button>
      </div>

      <form onChange={changeHandler} onSubmit={submitHandler}>
        <div className="flex gap-x-4 mt-[24px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>

            <input
              required
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
              value={formData.firstName}
            />
          </label>

          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>

            <input
              required
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
              value={formData.lastName}
            />
          </label>
        </div>

        <div className="mt-[20px]">

        <label className="w-full mt-[20px]">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address <sup className="text-pink-200">*</sup>
          </p>

          <input
            required
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            value={formData.email}
          />
        </label>

        </div>


        <div className="flex gap-x-4 mt-[20px]">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Password <sup className="text-pink-200">*</sup>
            </p>

            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Your Password"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
              value={formData.password}
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer z-10"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confrim Password <sup className="text-pink-200">*</sup>
            </p>

            <input
              required
              type={showConfirmPass ? "text" : "password"}
              name="confrimPassword"
              placeholder="Enter Confrim Password"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
              value={formData.confrimPassword}
            />

            <span
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showConfirmPass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button
          className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-8 
          font-medium text-richblack-900 w-full"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

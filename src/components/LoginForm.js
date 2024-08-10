import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (event) => {
    setFormData((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  };

  return (
    <form
      className="flex flex-col w-full gap-y-4 mt-6"
      onChange={changeHandler}
      onSubmit={submitHandler}
    >
      <label className="w-full mt-3">
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

      <label className="w-full relative mt-2">
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
          className="absolute right-3 top-[38px] cursor-pointer "
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>

        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
            Forgot Password
          </p>
        </Link>
      </label>

      <button
        className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 
        font-medium text-richblack-900"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;

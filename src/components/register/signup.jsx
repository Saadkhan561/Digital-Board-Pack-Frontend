import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = ({onUpdateLogin, prevLogin}) => {
    const [isLogin, setLogin] = useState(prevLogin)
    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    // TO UPDATE LOGIN STATE
    onUpdateLogin(isLogin)

  const initialValues = {
    username: "",
    password: "",
    confirm_password: "",
    email: "",
    role: "",
  };

  const signupSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().min(8, 'Password must be atleast 8 characters long').max(15, 'Password must not exceed this limit').required("Password is required"),
    confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirmation is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    role: Yup.string().required('Role is required')
  });

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="flex flex-col items-center h-[500px] w-[400px] menu_bar_mob:h-[450px] menu_bar_mob:w-[240px] p-4">
      <div className="text-3xl menu_bar_mob:text-xl font-semibold">Create your account</div>
      <form
        onSubmit={handleSubmit}
        className="w-[300px] menu_bar_mob:w-[200px] mt-4 flex flex-col gap-1"
      >
        <div>
          <label className="label" htmlFor="username">
            User Name
          </label>
          <div className="flex gap-1 border-b border-b-gray-300">
            <input
              className="input_field"
              type="text"
              id="username"
              name="username"
              values={values.username}
              onChange={handleChange}
            />
            <img className="h-4 w-4" src="/images/account_sm.png" alt=""/>
          </div>
          <p className="text-red-500 text-xs">{errors.username}</p>
        </div>
        <div>
          <label className="label" htmlFor="password">
            Password
          </label>
          <div className="flex gap-1 border-b border-b-gray-300">
            <input
              className="input_field"
              type={showPassword1 ? 'text' : 'password'}
              id="password"
              name="password"
              values={values.password}
              onChange={handleChange}
            />
            <img
            onClick={() => setShowPassword1(!showPassword1)}
              className="cursor-pointer h-4 w-4"
              src="/images/pass_eye.png"
              alt=""
            />
          </div>
          <p className="text-red-500 text-xs">{errors.password}</p>
        </div>
        <div>
          <label className="label" htmlFor="confirm_password">
            Confirm Password
          </label>
          <div className="flex gap-1 border-b border-b-gray-300">
            <input
              className="input_field"
              type={showPassword2 ? 'text' : 'password'}
              id="confirm_password"
              name="confirm_password"
              values={values.confirm_password}
              onChange={handleChange}
            />
            <img
            onClick={() => setShowPassword2(!showPassword2)}
              className="cursor-pointer h-4 w-4"
              src="/images/pass_eye.png"
              alt=""
            />
          </div>
          <p className="text-red-500 text-xs">{errors.confirm_password}</p>
        </div>
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <div className="flex gap-1 border-b border-b-gray-300">
            <input
              className="input_field"
              type="email"
              id="email"
              name="email"
              values={values.email}
              onChange={handleChange}
            />
            <img
              className="h-4 w-4"
              src="/images/input_email.png"
              alt=""
            />
          </div>
          <p className="text-red-500 text-xs">{errors.email}</p>
        </div>
        <div>
          <label className="label" htmlFor="role">
            Role
          </label>
          <div className="flex gap-1 border-b border-b-gray-300">
            <input
              className="input_field"
              type="text"
              id="role"
              name="role"
              values={values.role}
              onChange={handleChange}
            />
            <img
              className="h-4 w-4"
              src="/images/role.png"
              alt=""
            />
          </div>
          <p className="text-red-500 text-xs">{errors.role}</p>
        </div>
        <button
          className="border menu_bar_mob:text-sm rounded-md bg-slate-100 font-semibold hover:bg-slate-200 ease-in-out duration-200 p-[1px] mt-2"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className="flex gap-1 text-md menu_bar_mob:text-xs mt-2">
        <p>
          Already have an account?{" "}
          <a
            onClick={() => setLogin(!isLogin)}
            className="text-blue-500 underline"
            href=""
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

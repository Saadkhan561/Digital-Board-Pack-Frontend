import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = ({onUpdateLogin, prevLogin}) => {
    const [isLogin, setLogin] = useState(prevLogin)
    const [showPassword, setShowPassword] = useState(false)

    onUpdateLogin(isLogin)

    const initialValues = {
        username: "",
        password: "",
      };
    
      const loginSchema = Yup.object({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required"),
      });
    
      const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values) => {
          console.log(values);
        },
      });
  return (
    <>
      {/* LOGIN DIV */}
      <div className="flex flex-col items-center h-[500px] w-[400px] menu_bar_mob:h-[400px] menu_bar_mob:w-[240px] p-8">
        <div className="text-3xl menu_bar_mob:text-xl font-semibold">Welcome</div>
        <div className="text-slate-500 text-sm">Sign in to your account</div>
        <form
          onSubmit={handleSubmit}
          className="w-[300px] menu_bar_mob:w-[200px] mt-8 flex flex-col gap-3"
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
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                values={values.password}
                onChange={handleChange}
              />
              <img
              onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer h-4 w-4"
                src="/images/pass_eye.png"
                alt=""
              />
            </div>
            <p className="text-red-500 text-xs">{errors.password}</p>
          </div>
          <button
            className="border menu_bar_mob:text-sm rounded-md bg-slate-100 font-semibold hover:bg-slate-200 ease-in-out duration-200 p-[1px] mt-2"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className="flex gap-1 text-xs mt-2">
            <p>Don't have an account? <a onClick={() => setLogin(!isLogin)} className="text-blue-500 underline" href="#">Sign Up</a></p>
        </div>
      </div>
    </>
  );
};

export default Login;

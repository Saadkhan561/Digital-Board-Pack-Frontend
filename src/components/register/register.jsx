import React, { useState } from "react";
import Login from "./login";
import SignUp from "./signup";

const Register = () => {
  const [isLogin, setLogin] = useState('true')
  const updateLogin = (newLogin) => {
    setLogin(newLogin)
  }

  const register = () => {
    if (isLogin) {
      return (
        <Login prevLogin={isLogin} onUpdateLogin={updateLogin} />
      )
    }
    else {
      return (
        <SignUp prevLogin={isLogin} onUpdateLogin={updateLogin} />
      )
    }
  }

  return (
    <div className="border border-black h-screen flex justify-center items-center">
      <div className="flex shadow-2xl rounded-lg border border-slate-300">
        <div className="h-[500px] w-[400px] relative md:hidden">
          <img className="object-cover h-full" src="/images/login_img.jpg" alt="" />
          <p className="absolute top-1/3 left-5 text-3xl font-semibold">Digital Board Pack</p>
        </div>
        {register()}
      </div>
    </div>
  );
};

export default Register;

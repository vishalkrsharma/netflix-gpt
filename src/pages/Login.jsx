import React from "react";

import Header from "../components/Header";
import Form from "../components/Form";

const Login = () => {
  return (
    <div className="absolute -z-20  min-h-full w-full bg-NETFLIX_BG bg-cover bg-center">
      <div className="absolute -z-10  min-h-full w-full bg-neutral-950 opacity-60"></div>
      <Header />
      <Form />
    </div>
  );
};

export default Login;

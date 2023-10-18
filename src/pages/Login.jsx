import React from "react";

import Header from "../components/Header";
import Form from "../components/Form";
import NETFLIX_BG from "../assets/Netflix_Bg.jpg";

const Login = () => {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${NETFLIX_BG})` }}
    >
      <Header />
      <Form />
    </div>
  );
};

export default Login;

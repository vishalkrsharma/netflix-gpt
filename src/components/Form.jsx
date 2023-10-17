import React, { useState, useRef } from "react";

import { checkValidDataSignUp, checkValidDataSignIn } from "../utils/validate";

const Form = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (event) => {
    event.preventDefault();
    let message;
    if (isSignInForm) {
      message = checkValidDataSignIn(
        email.current.value,
        password.current.value,
      );
    } else {
      message = checkValidDataSignUp(
        name.current.value,
        email.current.value,
        password.current.value,
      );
    }

    setErrorMessage(message);
  };

  return (
    <div className="m-auto mt-20 flex w-[30rem] flex-col gap-6 bg-neutral-950 bg-opacity-60 p-10">
      <div className="text-3xl font-medium text-white">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </div>
      <form className="flex flex-col gap-6">
        {!isSignInForm && (
          <input
            className="rounded-md bg-gray-600 p-3 text-white"
            ref={name}
            type="text"
            placeholder="Name"
          />
        )}
        <input
          className="rounded-md bg-gray-600 p-3 text-white"
          ref={email}
          type="text"
          placeholder="Email"
        />
        <input
          className="rounded-md bg-gray-600 p-3 text-white"
          ref={password}
          type="password"
          placeholder="Password"
        />
        {errorMessage && (
          <p className="-my-2 text-sm font-medium text-amber-600">
            {errorMessage}
          </p>
        )}
        <button
          className="rounded-md bg-red-600 p-3 font-medium text-white"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
      </form>
      <p className="text-gray-400">
        {isSignInForm ? "New to Netflix?" : "Already a member?"}{" "}
        <span
          className="cursor-pointer text-white hover:underline"
          onClick={() => setIsSignInForm((prev) => !prev)}
        >
          {isSignInForm ? "Sign up now." : "Sign in now."}
        </span>
      </p>
    </div>
  );
};

export default Form;

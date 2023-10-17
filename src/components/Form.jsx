import React, { useState } from "react";

const Form = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  return (
    <div className="m-auto mt-20 flex w-[30rem] flex-col gap-6 bg-neutral-950 bg-opacity-60 p-10">
      <div className="text-3xl font-medium text-white">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </div>
      <form className="flex flex-col gap-6">
        {!isSignInForm && (
          <input
            className="rounded-md bg-gray-600 p-3"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          className="rounded-md bg-gray-600 p-3"
          type="text"
          placeholder="Email"
        />
        <input
          className="rounded-md bg-gray-600 p-3"
          type="password"
          placeholder="Password"
        />
        <button className="rounded-md bg-red-600 p-3 font-medium text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
      </form>
      <div className="text-gray-400">
        {isSignInForm ? "New to Netflix?" : "Already a member?"}{" "}
        <span
          className="cursor-pointer text-white hover:underline"
          onClick={() => setIsSignInForm((prev) => !prev)}
        >
          {isSignInForm ? "Sign up now." : "Sign in now."}
        </span>
      </div>
    </div>
  );
};

export default Form;

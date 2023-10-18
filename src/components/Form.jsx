import React, { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";

import { checkValidData, checkName } from "../utils/validate";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";

const Form = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (isSignInForm) {
      setErrorMessage(
        checkValidData(email.current.value, password.current.value),
      );
    } else {
      setErrorMessage(
        checkName(name.current.value) ||
          checkValidData(email.current.value, password.current.value),
      );
    }

    if (errorMessage) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/32286936?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({ uid, email, displayName, photoURL }));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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

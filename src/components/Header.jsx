import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { auth } from "../utils/firebase";
import NETFLIX_LOGO from "../assets/Netflix_Logo.png";
import USER_AVATAR from "../assets/User_Avatar.png";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute top-0 z-10 flex min-w-full items-center justify-between bg-gradient-to-b from-neutral-950">
      <div className="w-56">
        <img src={NETFLIX_LOGO} alt="NETFLIX_LOGO" loading="lazy" />
      </div>
      {user && (
        <div className="mr-5 flex items-center justify-center gap-5 text-white">
          <button
            className="flex w-32 items-center justify-center gap-2 rounded-md bg-violet-700 px-4 py-2 font-medium"
            onClick={handleGptSearch}
          >
            {gpt.showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="h-10 rounded-md border-2 border-white"
            src={USER_AVATAR}
            alt="USER_AVATAR"
          />
          <button
            className="flex items-center justify-center gap-2 rounded-md bg-[#A61B24] px-4 py-2 font-medium"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

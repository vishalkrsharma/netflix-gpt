import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { auth } from "../utils/firebase";
import NETFLIX_LOGO from "../assets/Netflix_Logo.png";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
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

  return (
    <div className="flex items-center justify-between bg-gradient-to-b from-neutral-950">
      <img
        className="w-56"
        src={NETFLIX_LOGO}
        alt="NETFLIX_LOGO"
        loading="lazy"
      />
      {user && (
        <div className="mr-5">
          <img className="h-10" src={user.photoURL} alt="USER_AVATAR" />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;

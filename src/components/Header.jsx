import React from "react";
import NETFLIX_LOGO from "../assets/Netflix_Logo.png";

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-neutral-950">
      <img
        className="w-56"
        src={NETFLIX_LOGO}
        alt="NETFLIX_LOGO"
        loading="lazy"
      />
    </div>
  );
};

export default Header;

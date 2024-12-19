import React from "react";

const Logo = ({ size }) => {
  return (
    <div
      style={{
        width: size,
      }}
    >
      <img
        className="h-full w-full bg-zinc-100 rounded-xl object-cover"
        src="https://www.jobringer.com/images/logonew.svg"
        alt=""
      />
    </div>
  );
};

export default Logo;

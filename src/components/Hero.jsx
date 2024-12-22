import React from "react";
import Button from "./partials/Button";

const Hero = () => {
  const arr = [
    {
      text: "Find a Job",
      bgColor: "from-purple-600 to-pink-600",
      textColor: "text-white",
    },
    {
      text: "Post a Job",
      bgColor: "from-pink-600 to-sky-600",
      textColor: "text-white",
    },
  ];

  return (
    <div id="top" className="h-[80vh] flex flex-col justify-center items-center w-full gap-y-2">
      <h1 className="md:text-8xl text-[7vw] md:w-[62vw] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 capitalize">
        Find A Job that You Deserve
      </h1>
      <p className="w-[62vw] text-zinc-300 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita
        tenetur consectetur blanditiis pariatur praesentium vitae corrupti
        cupiditate rerum? Eius harum eveniet officia ea, perferendis dignissimos
        doloribus consequuntur impedit deleniti!
      </p>
      <div className="mt-10 flex gap-3">
        {arr.map((item, index) => (
        <Button item={item.text} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const Home = () => {
  return (
    <div className="flex w-3/4 m-auto justify-center items-center h-screen  overflow-hidden">
      <div className="w-full">
        <img
          src="/hero.jpg"
          alt="hero image"
          className="w-full rounded-full p-5"
        />
      </div>
      <div className="w-full">
        <h1 className="uppercase text-8xl font-bold text-orange-400">
          cooking
        </h1>
        <h3 className="text-4xl capitalize font-semibold ml-2 mt-1 mb-5">
          healthy food
        </h3>
        <button className="w-32 p-5 pt-2 pb-2 ml-2 rounded text-white font-semibold bg-red-600">
          know more
        </button>
      </div>
    </div>
  );
};

export default Home;

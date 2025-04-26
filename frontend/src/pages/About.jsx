import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold">About Page</h1>
      <p className="text-gray-400 mt-2 text-lg">Leanr more about me.</p>
      <button className="mt-4 px-6 py-2 bg-gray-800 hover:bg-gray-600 rounded-lg">
        Learn More
      </button>
    </div>
  );
};

export default About;

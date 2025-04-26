import React from "react";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="text-gray-400 mt-2 text-lg">What have I been working on?</p>
      <button className="mt-4 px-6 py-2 bg-gray-800 hover:bg-gray-600 rounded-lg">
        Projects
      </button>
    </div>
  );
};

export default Projects;

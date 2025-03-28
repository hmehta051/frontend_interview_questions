import { Link } from "react-router-dom";

import Tabs from "./Tabs";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Tabs",
      description: "Tabs For Navigation",
      component: Tabs,
    },
    { id: 2, title: "Star Rating", description: "Star Rating" },
    { id: 3, title: "Timer", description: "Simple Countdown Timer" },
    {
      id: 4,
      title: "Timer Advance",
      description: "Advance Timer with HH:MM:SS",
    },
    {
      id: 5,
      title: "Flip Card",
      description: "Flip Card",
    },
    {
      id: 6,
      title: "Accordion",
      description: "Accordion",
    },
    {
      id: 7,
      title: "Progress Bar",
      description: "Progress Bar",
    },
    {
      id: 8,
      title: "Tic Tac Toe",
      description: "Tic Tac Toe",
    },
    {
      id: 9,
      title: "Grid Stack",
      description: "Grid Stack",
    },
    {
      id: 10,
      title: "Moving Robot",
      description: "Moving Robot",
    },
    {
      id: 11,
      title: "AutoComplete",
      description: "AutoComplete",
    },
    // Add more projects as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-8">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-110 absolute top-4 left-4"
        >
          Go Back
        </Link>
      </div>
      <h2 className="text-2xl mb-4">Projects</h2>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="text-black hover:underline"
          >
            <div className="border-2 border-gray-300 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;

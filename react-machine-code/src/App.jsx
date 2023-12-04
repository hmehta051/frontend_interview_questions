import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to my Page</h1>
      <Link
        to="/projects"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
      >
        View Projects
      </Link>
    </div>
  );
}

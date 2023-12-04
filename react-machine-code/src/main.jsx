import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import Projects from "./pages/Projects.jsx";
import Tabs from "./pages/Tabs.jsx";
import StarRating from "./pages/StarRating.jsx";
import Timer from "./pages/Timer.jsx";
import TimerAdvance from "./pages/TimerAdvance.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/1",
    element: <Tabs />,
  },
  {
    path: "/projects/2",
    element: <StarRating />,
  },
  {
    path: "/projects/3",
    element: <Timer />,
  },
  {
    path: "/projects/4",
    element: <TimerAdvance />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

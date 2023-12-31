import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

// page components

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

const getWeatherOfTheDay = () => {
  return "sunny";
};

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => {
          return getWeatherOfTheDay();
        },
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/gallery/:id",
        element: <Gallery />,
      },
    ],
  },
]);

// rendering

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Browse from "./pages/Browse";
import Login from "./pages/Login";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

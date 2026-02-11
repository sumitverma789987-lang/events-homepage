import { useState } from "react";

import Home from "./components/Pages/Home";
import Navbar from "./components/Common/Navbar";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Username from "./components/Pages/Username";
import Feed from "./components/Pages/Feed";
import Events from "./components/Pages/Events";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      )
    },
    {
      path: "/events",
      element: (
        <>
          <Events />

        </>
      )
    },
   
    {
      path: "/feed",
      element: (
        <>
          <Feed />

        </>
      )
    },
    {
      path: "/username",
      element: (
        <>
          <Username />

        </>
      )
    },
  ])
  return (
    <RouterProvider router={router} />
   

  );
}



export default App;

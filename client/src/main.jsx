import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage404 from "./pages/ErrorPage404/ErrorPage404";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import Recepies from "./pages/Recepies/Recepies";
import CreationRecette from "./pages/CreationRecette/CreationRecette";
import { fetchApi, sendData } from "./services/api.service";
import RecepieDetails from "./pages/RecepieDetail/RecepieDetail";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/recettes",
        element: <Recepies />,
        loader: async () => {
          const recepies = await fetchApi("/api/arranged_rum");
          const rums = await fetchApi("/api/rum");
          const ingredients = await fetchApi("/api/ingredient");
          return { recepies, rums, ingredients };
        },
      },
      {
        path: "/recette/:id",
        element: <RecepieDetails />,
        loader: async ({ params }) =>
          fetchApi(`/api/arranged_rum/${params.id}`),
      },
      {
        path: "/creation-recette",
        element: <CreationRecette />,
        loader: async () => {
          const rums = await fetchApi("/api/rum");
          const ingredients = await fetchApi("/api/ingredient");
          return { rums, ingredients };
        },
        action: async ({ request }) => {
          const formData = await request.formData();
          const data = Object.fromEntries(formData.entries());
          return sendData("/api/arranged_rum/", data, "POST");
        },
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/infos",
        element: <AboutUsPage />,
      },
      {
        path: "*",
        element: <ErrorPage404 />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

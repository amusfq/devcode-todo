import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/pages/error.page";
import "@/index.css";
import DashboardPage from "@/pages/dashboard.page";
import ActivityPage from "./pages/activity.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/activity/:id",
        element: <ActivityPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

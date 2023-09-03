import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Root from "./Root";
import StartScreen from "./StartScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    index: true,
    element: <StartScreen />,
  },
  {
    path: "/game",
    element: <div>Game page</div>,
  },
  {
    path: "/stats",
    element: <div>Stats page</div>,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

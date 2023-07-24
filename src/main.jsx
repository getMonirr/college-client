import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@smastrom/react-rating/style.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import AuthProvider from "./provider/AuthProvider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchProvider } from "./provider/SearchProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <AuthProvider>
          <RouterProvider router={Routes} />
          <ToastContainer />
        </AuthProvider>
      </SearchProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

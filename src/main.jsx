import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./providers/AuthProviders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Toaster />
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </AuthProviders>
);

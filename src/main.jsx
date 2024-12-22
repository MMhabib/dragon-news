import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import routes from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
import Authprovider from "./providers/Authprovider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={routes} />
    </Authprovider>
  </StrictMode>
);

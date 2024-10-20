import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Loader from "./pages/loader";
import "./index.css";

const AppRoute = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <AppRoute />
    </Suspense>
  </React.StrictMode>
);

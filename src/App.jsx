import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage, { productLoader } from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<HomePage />} loader={productLoader} />
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;

import { createBrowserRouter } from "react-router-dom";
import FilterPage from "../Pages/FilterPage";
import BrandPage from "../Pages/BrandPage";

const router = createBrowserRouter([
   {
      path: "/",
      element: <FilterPage />
   },
   {
      path: "result/:makeId/:year",
      element: <BrandPage />
   }
])

export default router
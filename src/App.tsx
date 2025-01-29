import { RouterProvider } from "react-router-dom";
import router from "./router/Router";

function App() {
   return (
      <div className="px-10 text-4xl">
         <RouterProvider router={router} />
      </div>
   );
}

export default App;

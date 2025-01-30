import { useDispatch, useSelector } from "react-redux"; 
import { Link, useParams } from "react-router-dom";
import { fetchVehicleModels } from "../store/Slices/filterSlice";
import { useEffect } from "react";

const BrandPage = () => {
  const { makeId, year } = useParams(); 
  const dispatch = useDispatch();

  const { loadingModels, models, error } = useSelector((state) => state.filter); 

  useEffect(() => {
      dispatch(fetchVehicleModels({ makeId, year }));
   }, [dispatch, makeId, year]);

   const makeName = models?.[0]?.Make_Name || ''; 

   return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-6">
         <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Vehicle Models {makeName} for {year}
         </h1>

         {loadingModels && <p>Loading vehicle models...</p>}
         {error && <p className="text-red-500">{error}</p>}
         {models.length === 0 && !loadingModels && (
            <p>No models found for this selection.</p>
         )}

         <Link
            to="/"
            className="block w-full text-center bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600"
         >
            Turn back
         </Link>

         <ul className="mt-4">
            {models.map((model) => (
               <li
                  key={model.Model_ID}
                  className="border-b py-2 text-blue-600"
               >
                  {model.Model_Name}
               </li>
            ))}
         </ul>
      </div>
   </div>
  );
};

export default BrandPage;
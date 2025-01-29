import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

interface Make {
   MakeId: number;
   MakeName: string;
}

const FilterPage = () => {
   const { makes, years } = useSelector((state) => state.filter);
   // const [selectYear, setSelectYearState] = useState<number | null>(null);
   // const [selectBrand, setSelectYear] = useState<number | null>(null);
   return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
         <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Filter Page</h1>
            <div className="flex flex-col mb-4">
               <label htmlFor="make" className="mb-2 text-gray-700">Make</label>
               <select
                  name="make"
                  id="make"
                  className="bg-white border border-gray-300 p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
               >
                  <option value="" disabled selected>
                     Select a brand
                  </option>
                  {makes.map((make: Make) => (
                     <option key={make.MakeId} value={make.MakeName}>
                        {make.MakeName}
                     </option>
                  ))}
               </select>
            </div>
            <div className="flex flex-col mb-4">
               <label htmlFor="make" className="mb-2 text-gray-700">Year</label>
               <select
                  name="make"
                  id="make"
                  className="bg-white border border-gray-300 p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
               >
                  <option value="" disabled selected>
                     Select a year
                  </option>
                  {years.map((year: number) => (
                     <option key={year} value={year}>
                        {year}
                     </option>
                  ))}
               </select>
            </div>
            <div>
               <Link to="result/:makeId/:year" className="bg-blue-500 text-white py-4 px-4 rounded-md w-[100%] block ">
                  Show models
               </Link>
            </div>
         </div>
      </div>
   );
};

export default FilterPage;

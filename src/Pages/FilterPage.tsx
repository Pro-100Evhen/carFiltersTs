import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FilterState, Make } from "../store/Slices/filterSlice";



interface RootState {
   filter: FilterState;
}

const FilterPage = () => {
   const { makes, years } = useSelector((state: RootState) => state.filter);

   const [selectMake, setSelectMake] = useState<string | undefined>(undefined);
   const [selectYear, setSelectYear] = useState<number | undefined>(undefined);

   const handleMakeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectMake(event.target.value);
   };

   const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectYear(Number(event.target.value));
   };

   const isButtonDisabled = !selectMake || !selectYear;

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
                  onChange={handleMakeChange}
                  value={selectMake}
               >
                  <option value="" disabled>
                     Select a brand
                  </option>
                  {makes.map((make: Make) => (
                     <option key={make.MakeId} value={make.MakeId}>
                        {make.MakeName}
                     </option>
                  ))}
               </select>
            </div>
            <div className="flex flex-col mb-4">
               <label htmlFor="year" className="mb-2 text-gray-700">Year</label>
               <select
                  name="year"
                  id="year"
                  className="bg-white border border-gray-300 p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleYearChange}
                  value={selectYear}
               >
                  <option value="" disabled>
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
               <Link
                  to={`result/${selectMake}/${selectYear}`}
                  className={`bg-blue-500 text-white py-4 px-4 rounded-md w-full block ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                  style={{ pointerEvents: isButtonDisabled ? 'none' : 'auto' }} 
               >
                  Show models
               </Link>
            </div>
         </div>
      </div>
   );
};

export default FilterPage;
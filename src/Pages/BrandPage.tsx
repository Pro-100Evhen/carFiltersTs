import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchVehicleModels } from "../store/Slices/filterSlice";
import { useEffect } from "react";

const BrandPage = () => {
  const { makeId, year } = useParams(); 
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchVehicleModels({ makeId, year }));
   }, [dispatch, makeId, year]);


  return (
    <div>
      <h1>Brand Page</h1>
      <p>ID: {makeId}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default BrandPage;
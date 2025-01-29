import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface VehicleModel {
   MakeId: number;
   MakeName: string;
}

interface FilterState{
   makes: string[];
   years: number[],
   selectedMakeId: number | null;
   selectedYear: number | null;
   models: VehicleModel[];
   loadingModels: boolean;
   error: string | null;
}

const initialState: FilterState = {
   makes: [],
   years: Array.from({ length: new Date().getFullYear() - 2014 }, (_, i) => 2015 + i),
   selectedMakeId: null,
   selectedYear: null,
   models: [],
   loadingModels: false,
   error: null
}

export const fetchMakes = createAsyncThunk(
   'filter/fetchMakes',
   async () => {
      const response = await axios.get(import.meta.env.VEHICLE_MAKES_API);
      return response.data;
   }
);

const filterSlice = createSlice({
   name: "filter",
   initialState,
   reducers: {
      
   },
   extraReducers(builder) {
      builder.addCase(fetchMakes.pending, (state) => {
         state.error = null;
      });
      builder.addCase(fetchMakes.fulfilled, (state, action) => {
         state.makes = action.payload;
      });
      builder.addCase(fetchMakes.rejected, (state, action) => {
         state.error = action.error.message || 'Failed to fetch makes';
      });
   },
})

export const filterReducer = filterSlice.reducer
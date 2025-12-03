// src/slices/adminSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { 
  flights as flightData, 
  passengers as passengerData, 
  ancillaryServices,
  mealOptions,
  shopItems 
} from '../data/flightData';

const initialState = {
  flights: flightData,
  selectedFlight: null,
  passengers: passengerData,
  ancillaryServices: ancillaryServices,
  mealOptions: mealOptions,
  shopItems: shopItems,
  filterOptions: {
    missingPassport: false,
    missingAddress: false,
    missingDOB: false,
  },
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setFlights(state, action) {
      state.flights = action.payload;
    },
    selectFlight(state, action) {
      state.selectedFlight = action.payload;
    },
    setPassengers(state, action) {
      state.passengers = action.payload;
    },
    setAncillaryServices(state, action) {
      state.ancillaryServices = action.payload;
    },
    addPassenger(state, action) {
      state.passengers.push(action.payload);
    },
    updatePassenger(state, action) {
      const index = state.passengers.findIndex(p => p.id === action.payload.id);
      if (index !== -1) state.passengers[index] = action.payload;
    },
    deletePassenger(state, action) {
      state.passengers = state.passengers.filter(p => p.id !== action.payload);
    },
    addAncillaryService(state, action) {
      if (!state.ancillaryServices.includes(action.payload)) {
        state.ancillaryServices.push(action.payload);
      }
    },
    updateAncillaryService(state, action) {
      const { oldService, newService } = action.payload;
      const index = state.ancillaryServices.indexOf(oldService);
      if (index !== -1) {
        state.ancillaryServices[index] = newService;
      }
    },
    deleteAncillaryService(state, action) {
      state.ancillaryServices = state.ancillaryServices.filter(s => s !== action.payload);
    },
    addMealOption(state, action) {
      if (!state.mealOptions.includes(action.payload)) {
        state.mealOptions.push(action.payload);
      }
    },
    updateMealOption(state, action) {
      const { oldMeal, newMeal } = action.payload;
      const index = state.mealOptions.indexOf(oldMeal);
      if (index !== -1) {
        state.mealOptions[index] = newMeal;
      }
    },
    deleteMealOption(state, action) {
      state.mealOptions = state.mealOptions.filter(m => m !== action.payload);
    },
    addShopItem(state, action) {
      state.shopItems.push(action.payload);
    },
    updateShopItem(state, action) {
      const index = state.shopItems.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.shopItems[index] = action.payload;
      }
    },
    deleteShopItem(state, action) {
      state.shopItems = state.shopItems.filter(item => item.id !== action.payload);
    },
    setAdminFilter(state, action) {
      state.filterOptions = { ...state.filterOptions, ...action.payload };
    },
    clearAdminFilters(state) {
      state.filterOptions = {
        missingPassport: false,
        missingAddress: false,
        missingDOB: false,
      };
    },
  },
});

export const { 
  setFlights, 
  selectFlight, 
  setPassengers, 
  setAncillaryServices, 
  addPassenger, 
  updatePassenger, 
  deletePassenger,
  addAncillaryService,
  updateAncillaryService,
  deleteAncillaryService,
  addMealOption,
  updateMealOption,
  deleteMealOption,
  addShopItem,
  updateShopItem,
  deleteShopItem,
  setAdminFilter,
  clearAdminFilters
} = adminSlice.actions;

export default adminSlice.reducer;
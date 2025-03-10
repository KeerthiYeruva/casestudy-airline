// src/slices/adminSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  flights: [
    { id: 101, name: 'Flight AA101', time: '10:00 AM' },
    { id: 102, name: 'Flight BB202', time: '12:30 PM' },
    { id: 103, name: 'Flight CC303', time: '3:15 PM' },
  ],
  selectedFlight: null,
  passengers: [
    { id: 1, name: 'John Doe', seat: '12A', services: ['Wheelchair Assistance'] },
    { id: 2, name: 'Jane Smith', seat: '14B', services: ['Extra Baggage', 'Special Meal'] },
    { id: 3, name: 'Emily Johnson', seat: '10C', services: ['Priority Boarding'] },
  ],
  ancillaryServices: ['Extra Baggage', 'Special Meal', 'Priority Boarding', 'Wheelchair Assistance'],
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
  },
});

export const { setFlights, selectFlight, setPassengers, setAncillaryServices, addPassenger, updatePassenger, deletePassenger } = adminSlice.actions;
export default adminSlice.reducer;
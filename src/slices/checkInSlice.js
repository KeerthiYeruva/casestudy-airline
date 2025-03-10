import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  flights: [
    { id: 101, name: 'Flight AA101', time: '10:00 AM' },
    { id: 102, name: 'Flight BB202', time: '12:30 PM' },
    { id: 103, name: 'Flight CC303', time: '3:15 PM' },
  ],
  selectedFlight: null,
  passengers: [
    { id: 1, name: 'John Doe', seat: '12A', services: ['Wheelchair Assistance'], flightId: 101, checkedIn: false },
    { id: 2, name: 'Jane Smith', seat: '14B', services: ['Extra Baggage', 'Special Meal'], flightId: 102, checkedIn: false },
    { id: 3, name: 'Emily Johnson', seat: '10C', services: ['Priority Boarding'], flightId: 103, checkedIn: false },
  ],
};

const checkInSlice = createSlice({
  name: 'checkIn',
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
    checkInPassenger(state, action) {
      const passenger = state.passengers.find(p => p.id === action.payload);
      if (passenger) passenger.checkedIn = true;
    },
    undoCheckIn(state, action) {
      const passenger = state.passengers.find(p => p.id === action.payload);
      if (passenger) passenger.checkedIn = false;
    },
  },
});

export const { setFlights, selectFlight, setPassengers, checkInPassenger, undoCheckIn } = checkInSlice.actions;
export default checkInSlice.reducer;

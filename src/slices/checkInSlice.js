import { createSlice } from '@reduxjs/toolkit';
import { 
  flights as flightData, 
  passengers as passengerData, 
  ancillaryServices, 
  mealOptions,
  shopItems,
  shopCategories
} from '../data/flightData';

const initialState = {
  flights: flightData,
  selectedFlight: null,
  passengers: passengerData,
  ancillaryServices: ancillaryServices,
  mealOptions: mealOptions,
  shopItems: shopItems,
  shopCategories: shopCategories,
  filterOptions: {
    checkedIn: null, // null = all, true = checked in, false = not checked in
    wheelchair: false,
    infant: false,
  },
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
    changeSeat(state, action) {
      const { passengerId, newSeat } = action.payload;
      const passenger = state.passengers.find(p => p.id === passengerId);
      if (passenger) {
        // Check if new seat is available
        const seatTaken = state.passengers.find(
          p => p.seat === newSeat && p.flightId === passenger.flightId && p.id !== passengerId
        );
        if (!seatTaken) {
          passenger.seat = newSeat;
        }
      }
    },
    setFilter(state, action) {
      state.filterOptions = { ...state.filterOptions, ...action.payload };
    },
    clearFilters(state) {
      state.filterOptions = {
        checkedIn: null,
        wheelchair: false,
        infant: false,
      };
    },
    addAncillaryService(state, action) {
      const { passengerId, service } = action.payload;
      const passenger = state.passengers.find(p => p.id === passengerId);
      if (passenger && !passenger.ancillaryServices.includes(service)) {
        passenger.ancillaryServices.push(service);
      }
    },
    removeAncillaryService(state, action) {
      const { passengerId, service } = action.payload;
      const passenger = state.passengers.find(p => p.id === passengerId);
      if (passenger) {
        passenger.ancillaryServices = passenger.ancillaryServices.filter(s => s !== service);
      }
    },
    changeMealPreference(state, action) {
      const { passengerId, meal } = action.payload;
      const passenger = state.passengers.find(p => p.id === passengerId);
      if (passenger) {
        passenger.specialMeal = meal;
      }
    },
    addShopRequest(state, action) {
      const { passengerId, item, quantity, price } = action.payload;
      const passenger = state.passengers.find(p => p.id === passengerId);
      if (passenger) {
        if (!passenger.shopRequests) {
          passenger.shopRequests = [];
        }
        const existingItem = passenger.shopRequests.find(r => r.item === item);
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          passenger.shopRequests.push({ item, quantity, price });
        }
      }
    },
    removeShopRequest(state, action) {
      const { passengerId, item } = action.payload;
      const passenger = state.passengers.find(p => p.id === passengerId);
      if (passenger && passenger.shopRequests) {
        passenger.shopRequests = passenger.shopRequests.filter(r => r.item !== item);
      }
    },
    updateShopRequestQuantity(state, action) {
      const { passengerId, item, quantity } = action.payload;
      const passenger = state.passengers.find(p => p.id === passengerId);
      if (passenger && passenger.shopRequests) {
        const request = passenger.shopRequests.find(r => r.item === item);
        if (request) {
          if (quantity > 0) {
            request.quantity = quantity;
          } else {
            passenger.shopRequests = passenger.shopRequests.filter(r => r.item !== item);
          }
        }
      }
    },
  },
});

export const { 
  setFlights, 
  selectFlight, 
  setPassengers, 
  checkInPassenger, 
  undoCheckIn,
  changeSeat,
  setFilter,
  clearFilters,
  addAncillaryService,
  removeAncillaryService,
  changeMealPreference,
  addShopRequest,
  removeShopRequest,
  updateShopRequestQuantity
} = checkInSlice.actions;

export default checkInSlice.reducer;

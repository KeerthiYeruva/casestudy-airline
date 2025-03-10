import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFlight } from '../slices/checkInSlice';
import { List, ListItem, ListItemText, Typography, Paper } from '@mui/material';
import '../styles/FlightList.scss';

const FlightList = () => {
  const flights = useSelector(state => state.checkIn.flights);
  const selectedFlight = useSelector(state => state.checkIn.selectedFlight);
  const dispatch = useDispatch();

  const handleSelectFlight = (flight) => {
    dispatch(selectFlight(flight));
  };

  return (
    <Paper elevation={3} style={{ padding: '16px', margin: '16px' }}>
      <Typography variant="h5" gutterBottom>Select a Flight</Typography>
      <List>
        {flights.map(flight => (
          <ListItem 
            button 
            key={flight.id} 
            onClick={() => handleSelectFlight(flight)}
            selected={selectedFlight?.id === flight.id}
          >
            <ListItemText primary={`${flight.name} (${flight.time})`} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default FlightList;
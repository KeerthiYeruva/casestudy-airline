import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkInPassenger, undoCheckIn } from '../slices/checkInSlice';
import { List, ListItem, ListItemText, Button, Typography, Paper } from '@mui/material';
import '../styles/SeatMap.scss';

const SeatMap = () => {
  const selectedFlight = useSelector(state => state.checkIn.selectedFlight);
  const passengers = useSelector(state => state.checkIn.passengers).filter(
    (p) => selectedFlight && p.flightId === selectedFlight.id
  );
  const dispatch = useDispatch();

  return (
    <Paper elevation={3} style={{ padding: '16px', margin: '16px' }}>
      <Typography variant="h5" gutterBottom>
        {selectedFlight ? `Seat Map - ${selectedFlight.name}` : 'No Flight Selected'}
      </Typography>
      {selectedFlight ? (
        passengers.length > 0 ? (
          <List>
            {passengers.map(passenger => (
              <ListItem key={passenger.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <ListItemText 
                  primary={`${passenger.name} - Seat: ${passenger.seat}`} 
                  secondary={passenger.checkedIn ? 'Checked In' : 'Not Checked In'} 
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => dispatch(checkInPassenger(passenger.id))}
                  disabled={passenger.checkedIn}
                  sx={{ marginRight: '8px' }}
                >
                  Check In
                </Button>
                <Button 
                  variant="outlined" 
                  color="secondary" 
                  onClick={() => dispatch(undoCheckIn(passenger.id))}
                  disabled={!passenger.checkedIn}
                >
                  Undo
                </Button>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>No passengers assigned to this flight.</Typography>
        )
      ) : (
        <Typography>Please select a flight to view passengers.</Typography>
      )}
    </Paper>
  );
};

export default SeatMap;
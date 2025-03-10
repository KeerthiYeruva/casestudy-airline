import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPassenger, updatePassenger, deletePassenger } from '../slices/adminSlice';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const AdminDashboard = () => {
  const passengers = useSelector(state => state.admin.passengers);
  const dispatch = useDispatch();
  
  const [open, setOpen] = useState(false);
  const [newPassenger, setNewPassenger] = useState({ name: '', seat: '', services: '' });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setNewPassenger({ ...newPassenger, [e.target.name]: e.target.value });
  };

  const handleAddPassenger = () => {
    dispatch(addPassenger({ ...newPassenger, id: Date.now(), services: newPassenger.services.split(', ') }));
    setNewPassenger({ name: '', seat: '', services: '' });
    handleClose();
  };

  return (
    <Paper elevation={3} style={{ padding: '16px', margin: '16px' }}>
      <Typography variant="h5">Admin Dashboard</Typography>
      <Button variant="contained" color="primary" onClick={handleOpen} style={{ marginBottom: '10px' }}>Add Passenger</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Seat</TableCell>
            <TableCell>Ancillary Services</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {passengers.map(passenger => (
            <TableRow key={passenger.id}>
              <TableCell>{passenger.name}</TableCell>
              <TableCell>{passenger.seat}</TableCell>
              <TableCell>{passenger.services.join(', ')}</TableCell>
              <TableCell>
                <Button color="primary" onClick={() => dispatch(updatePassenger(passenger))}>Edit</Button>
                <Button color="secondary" onClick={() => dispatch(deletePassenger(passenger.id))}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Passenger</DialogTitle>
        <DialogContent>
          <TextField margin="dense" label="Name" name="name" fullWidth value={newPassenger.name} onChange={handleChange} />
          <TextField margin="dense" label="Seat" name="seat" fullWidth value={newPassenger.seat} onChange={handleChange} />
          <TextField margin="dense" label="Ancillary Services (comma separated)" name="services" fullWidth value={newPassenger.services} onChange={handleChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button onClick={handleAddPassenger} color="primary">Add</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default AdminDashboard;

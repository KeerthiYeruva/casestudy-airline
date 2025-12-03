import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import StaffCheckIn from './components/StaffCheckIn';
import InFlight from './components/InFlight';
import AdminDashboard from './components/AdminDashboard';
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline, 
  AppBar, 
  Toolbar, 
  Typography, 
  Button,
  Box
} from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import SettingsIcon from '@mui/icons-material/Settings';
import './App.scss';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});

const App = () => {
  const [currentView, setCurrentView] = useState('checkin'); // 'checkin', 'inflight', or 'admin'

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <FlightTakeoffIcon sx={{ mr: 2 }} />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Airline Management System
              </Typography>
              <Button
                color="inherit"
                startIcon={<AirlineSeatReclineExtraIcon />}
                onClick={() => setCurrentView('checkin')}
                variant={currentView === 'checkin' ? 'outlined' : 'text'}
                sx={{ mr: 1 }}
              >
                Check-In
              </Button>
              <Button
                color="inherit"
                startIcon={<FlightTakeoffIcon />}
                onClick={() => setCurrentView('inflight')}
                variant={currentView === 'inflight' ? 'outlined' : 'text'}
                sx={{ mr: 1 }}
              >
                In-Flight
              </Button>
              <Button
                color="inherit"
                startIcon={<SettingsIcon />}
                onClick={() => setCurrentView('admin')}
                variant={currentView === 'admin' ? 'outlined' : 'text'}
              >
                Admin
              </Button>
            </Toolbar>
          </AppBar>

          <Box sx={{ mt: 3, mb: 3 }}>
            {currentView === 'checkin' && <StaffCheckIn />}
            {currentView === 'inflight' && <InFlight />}
            {currentView === 'admin' && <AdminDashboard />}
          </Box>
        </Box>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
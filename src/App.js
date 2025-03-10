import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './Store';
// import Auth from './components/Auth';
import AdminDashboard from './components/AdminDashboard';
import { ThemeProvider, createTheme, CssBaseline, Container, Typography } from '@mui/material';

const FlightList = lazy(() => import('./components/FlightList'));
const SeatMap = lazy(() => import('./components/SeatMap'));

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>Airline Check-In System</Typography>
          <Suspense fallback={<Typography align="center">Loading...</Typography>}>
            {/* <Auth /> */}
            <AdminDashboard />
            <FlightList />
            <SeatMap />
          </Suspense>
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
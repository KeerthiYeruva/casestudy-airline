import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Store';
import FlightList from '../components/FlightList';

test('renders flight list component', () => {
  render(
    <Provider store={store}>
      <FlightList />
    </Provider>
  );
  const heading = screen.getByText(/Select a Flight/i);
  expect(heading).toBeInTheDocument();
});
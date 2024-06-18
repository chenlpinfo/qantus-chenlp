import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import Home from '../app/Home';
import HotelImage from '@/src/features/qantas/hotelList/components/HotelImage';
import { mockHotel } from '@/tests/mock-data';

describe('HotelImage', () => {
  it('renders a image', () => {
    render(<HotelImage hotel={mockHotel} />);

    const element = screen.getByText(/Exclusive Deal/i);

    expect(element).toBeInTheDocument();
  });
});

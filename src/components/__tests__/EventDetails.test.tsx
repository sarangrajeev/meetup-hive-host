
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import EventDetails from '../EventDetails';

const mockEvent = {
  id: "1",
  title: "Test Event",
  category: "Test Category",
  description: "Test Description",
  date: "2025-04-19",
  startTime: "10:00 AM",
  endTime: "5:30 PM",
  location: "Test Location",
  organizer: "Test Organizer",
  mapUrl: "https://example.com/map",
};

describe('EventDetails', () => {
  it('renders event details correctly', () => {
    render(<EventDetails event={mockEvent} />);

    expect(screen.getByText(/Friday, 19 April 2025/)).toBeInTheDocument();
    expect(screen.getByText(`Starts at ${mockEvent.startTime}`)).toBeInTheDocument();
    expect(screen.getByText(`Ends at ${mockEvent.endTime}`)).toBeInTheDocument();
    expect(screen.getByText(mockEvent.location)).toBeInTheDocument();
  });

  it('renders map link when mapUrl is provided', () => {
    render(<EventDetails event={mockEvent} />);
    
    const mapLink = screen.getByText('View on map');
    expect(mapLink).toBeInTheDocument();
    expect(mapLink).toHaveAttribute('href', mockEvent.mapUrl);
  });
});

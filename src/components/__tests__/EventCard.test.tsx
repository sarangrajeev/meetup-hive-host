
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import EventCard from '../EventCard';

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
  mustAttend: true,
};

describe('EventCard', () => {
  it('renders event information correctly', () => {
    render(
      <BrowserRouter>
        <EventCard event={mockEvent} />
      </BrowserRouter>
    );

    expect(screen.getByText(mockEvent.title)).toBeInTheDocument();
    expect(screen.getByText(mockEvent.category)).toBeInTheDocument();
    expect(screen.getByText(mockEvent.location)).toBeInTheDocument();
    expect(screen.getByText('Must Attend')).toBeInTheDocument();
  });
});

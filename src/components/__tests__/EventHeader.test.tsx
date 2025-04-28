
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import EventHeader from '../EventHeader';

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

describe('EventHeader', () => {
  it('renders event header information correctly', () => {
    render(<EventHeader event={mockEvent} />);

    expect(screen.getByText(mockEvent.title)).toBeInTheDocument();
    expect(screen.getByText(mockEvent.category)).toBeInTheDocument();
    expect(screen.getByText('Must Attend')).toBeInTheDocument();
  });

  it('calls onBuyTicket when buy ticket button is clicked', () => {
    const onBuyTicket = vi.fn();
    render(<EventHeader event={mockEvent} onBuyTicket={onBuyTicket} />);

    const buyButton = screen.getByText('Buy Ticket');
    fireEvent.click(buyButton);

    expect(onBuyTicket).toHaveBeenCalled();
  });
});

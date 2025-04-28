
# Frontend Test Cases Documentation

## Components Testing Overview

This document outlines the test cases implemented for the frontend components of our application.

### EventCard Component
**File**: `src/components/__tests__/EventCard.test.tsx`

#### Test Cases:
1. **Renders event information correctly**
   - Verifies the display of:
     - Event title
     - Category
     - Location
     - "Must Attend" badge (when applicable)
   - Input: Mock event object with required fields
   - Expected: All information should be visible and correctly formatted

### EventHeader Component
**File**: `src/components/__tests__/EventHeader.test.tsx`

#### Test Cases:
1. **Renders header information correctly**
   - Verifies the display of:
     - Event title
     - Category
     - "Must Attend" badge
   - Input: Mock event object with title, category, and mustAttend flag
   - Expected: All header information should be visible

2. **Buy Ticket button functionality**
   - Tests the click handler for the buy ticket button
   - Input: Mock function passed as onBuyTicket prop
   - Expected: Function should be called when button is clicked

### EventDetails Component
**File**: `src/components/__tests__/EventDetails.test.tsx`

#### Test Cases:
1. **Renders event details correctly**
   - Verifies the display of:
     - Formatted date (Friday, 19 April 2025)
     - Start time
     - End time
     - Location
   - Input: Mock event object with date, times, and location
   - Expected: All details should be properly formatted and visible

2. **Map link functionality**
   - Tests the presence and attributes of the map link
   - Input: Mock event object with mapUrl
   - Expected: Link should be present with correct href attribute

## Running Tests

To run the tests, use the following command:
```bash
npm test
```

## Test Coverage

Current test coverage includes:
- Basic rendering of components
- Event handler functionality
- Prop validation
- Link functionality
- Date formatting

## Future Test Considerations

Suggested additional test cases to implement:
1. Error states handling
2. Loading states
3. Empty state handling
4. Form validation
5. API integration tests
6. User interaction flows
7. Accessibility testing

## Test Dependencies

The testing setup uses:
- Vitest for test running and assertions
- React Testing Library for component testing
- JSDOM for browser environment simulation
- @testing-library/jest-dom for additional matchers


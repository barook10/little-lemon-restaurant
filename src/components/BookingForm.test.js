import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading label', () => {
    const availableTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];

    const mockDispatch = jest.fn();

    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />);
    
    const dateLabel = screen.getByText("Choose date");
    expect(dateLabel).toBeInTheDocument();
});

test('Renders all form labels in BookingForm', () => {
    const availableTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];

    const mockDispatch = jest.fn();

    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />);
    
    expect(screen.getByText("Choose date")).toBeInTheDocument();
    expect(screen.getByText("Choose time")).toBeInTheDocument();
    expect(screen.getByText("Number of guests")).toBeInTheDocument();
    expect(screen.getByText("Occasion")).toBeInTheDocument();
});

test('Renders the Make Reservation button', () => {
    const availableTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];

    const mockDispatch = jest.fn();

    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />);
    
    const submitButton = screen.getByRole("button", { name: /make reservation/i });
    expect(submitButton).toBeInTheDocument();
});

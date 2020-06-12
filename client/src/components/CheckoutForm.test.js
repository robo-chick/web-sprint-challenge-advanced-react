import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    const header = getByText(/checkout form/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByTestId, getByText } =
    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);

    fireEvent.change(firstName, { target: {value: 'Tasha'}});
    fireEvent.change(lastName, { target: {value: 'Hollingsworth'}});
    fireEvent.change(address, { target: {value: '1234 5 St'}});
    fireEvent.change(city, { target: {value: 'Tampa'}});
    fireEvent.change(state, { target: {value: 'FL'}});
    fireEvent.change(zip, { target: {value: '33333'}});

    expect(firstName.value).toBe('Tasha');
    expect(lastName.value).toBe('Hollingsworth');
    expect(address.value).toBe('1234 5 St');
    expect(city.value).toBe('Tampa');
    expect(state.value).toBe('FL');
    expect(zip.value).toBe('33333');

    const checkoutButton = screen.getByText('Checkout')
    fireEvent.click(checkoutButton)

    const getName = screen.getByText(/tasha/i);
    expect(getName).toBeInTheDocument();

    const success = screen.getByTestId(/successMessage/i);
    expect(success).toBeInTheDocument();
});

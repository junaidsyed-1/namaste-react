import { fireEvent, render, screen } from "@testing-library/react";
import Header from '../Header';
import { Provider } from "react-redux";
import appstore from "../../utils/appStore";
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';


describe("Test Cases for Header Component", () => {

    it("should load the button of header component", () => {

        render(
            <BrowserRouter>
                <Provider store={appstore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        // Querying
        const headerButton = screen.getByRole('button', { name: 'Login' });

        // Assertion
        expect(headerButton).toBeInTheDocument()
    });

    it("Should redner component with cart item 0", () => {

        render(
            <BrowserRouter>
                <Provider store={appstore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const cartItems = screen.getByText('Cart -')
        expect(cartItems).toBeInTheDocument();

    });

    it("Should redner component with cart item 0", () => {

        render(
            <BrowserRouter>
                <Provider store={appstore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const cartItems = screen.getByText(/Cart/)
        expect(cartItems).toBeInTheDocument();

    });

    it("should change the Login to Logout button", () => {

        render(
            <BrowserRouter>
                <Provider store={appstore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        // Querying
        const loginButton = screen.getByRole('button', { name: 'Login' });

        fireEvent.click(loginButton);

        const logoutButton = screen.getByRole('button', { name: 'Logout' })

        // Assertion
        expect(logoutButton).toBeInTheDocument()
    });

});


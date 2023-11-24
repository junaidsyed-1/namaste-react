import { act } from 'react-dom/test-utils';
import MOCK_DATA from '../mocks/resMenu.json'
import { fireEvent, render, screen } from '@testing-library/react';
import RestaurantMenu from '../RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import "@testing-library/jest-dom"
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header'


global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
}));

it("should load the menu component", async () => {

    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </BrowserRouter>
    ));

    const accordionHeader = screen.getByText("Chinese Economic Combo [2 Boxes] (6)");
    fireEvent.click(accordionHeader);

    const addBtns = screen.getAllByRole('button', { name: "Add +" })
    fireEvent.click(addBtns[0]);

    // Check if the item added to the cart
    expect(screen.getByText('Cart - (1 Items)')).toBeInTheDocument();

    expect(screen.getAllByTestId('foodItems').length).toBe(6);



});
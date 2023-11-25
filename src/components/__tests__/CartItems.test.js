import { act } from 'react-dom/test-utils';
import MOCK_DATA from '../mocks/resMenu.json'
import { fireEvent, render, screen } from '@testing-library/react';
import RestaurantMenu from '../RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import "@testing-library/jest-dom"
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import Cart from '../Cart'


global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
}));



describe("It should load the Menu Items and it should add the items to the cart, also display the cart component", () => {

    it("should load the menu component with Accordion Header", async () => {

        await act(async () => render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        ));

        const accordionHeader = screen.getByText("Chinese Economic Combo [2 Boxes] (6)");
        fireEvent.click(accordionHeader);

        expect(screen.getAllByTestId('foodItems').length).toBe(6);

    });

    it('should add the item to the cart', async () => {

        await act(async () => render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        ));

        const accordionHeader = screen.getByText("Chinese Economic Combo [2 Boxes] (6)");
        fireEvent.click(accordionHeader);

        const addBtns = screen.getAllByRole('button', { name: 'Add +' });
        fireEvent.click(addBtns[0]);

        const cartItem = screen.getByText('Cart - (1 Items)')

        expect(cartItem).toBeInTheDocument();

        // Add 2 Items
        fireEvent.click(addBtns[1]);
        expect(screen.getByText('Cart - (2 Items)')).toBeInTheDocument();

        // It is showing 7 because default items were 6 and then we added one and we are re-using the ItemList Component
        const ItemsAdded = screen.getAllByTestId('foodItems');
        expect(ItemsAdded.length).toBe(8);

        // Clearing the cart
        const clearCart = screen.getByRole('button', { name: 'Clear Cart' });
        fireEvent.click(clearCart);

        // After clearing the cart the length should be now 6
        expect(screen.getAllByTestId('foodItems').length).toBe(6);




    });

});
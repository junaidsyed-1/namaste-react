import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from '../mocks/resListData.json'
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
});

it("should render the Res cards before and after the search", async () => {

    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))

    const intitalCards = screen.getAllByTestId('resCards')

    // Assertion of all the cards before search
    expect(intitalCards.length).toBe(20)

    // Getting the search button
    const searchButton = screen.getByRole('button', { name: 'Search' });

    // Getting the search input
    const searchInput = screen.getByTestId('seachInput');

    // Firing the onChange event with the value of pizza
    fireEvent.change(searchInput, { target: { value: "pizza" } });

    // Firing the onClick event
    fireEvent.click(searchButton);

    // Getting the search result
    const cardsAfterSearch = screen.getAllByTestId('resCards');

    // Assertion
    expect(cardsAfterSearch.length).toBe(2);


});

it("should filter out the top rated restaurants", async () => {
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));

    const initialCards = screen.getAllByTestId('resCards');

    expect(initialCards.length).toBe(20);

    const filterBtn = screen.getByRole('button', { name: "Top Rated Restaurants" });

    fireEvent.click(filterBtn);

    const cardsAfterFilter = screen.getAllByTestId('resCards');

    expect(cardsAfterFilter.length).toBe(17);

})
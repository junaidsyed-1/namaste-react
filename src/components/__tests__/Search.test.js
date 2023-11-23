import { render, screen } from "@testing-library/react";
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

it("should render the Body component with search button", async () => {

    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))

    const searchButton = screen.getByRole('button', { name: 'Search' });

    expect(searchButton).toBeInTheDocument();


});
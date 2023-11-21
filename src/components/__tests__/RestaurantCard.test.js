import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from '../mocks/restaurantCard.json';
import "@testing-library/jest-dom";
import { isOpenNow } from "../RestaurantCard";
import RestaurantCardOpen from "../RestaurantCard"


it("should render restaurant card component with props data", () => {

    render(<RestaurantCard resList={MOCK_DATA} />);

    const cardName = screen.getByText("Burger King");

    expect(cardName).toBeInTheDocument();

});

it("should render isOpenNow component which is a higher order function", () => {

    const RestaurantCardOpen = isOpenNow(RestaurantCard)

    render(<RestaurantCardOpen resList={MOCK_DATA} />);

    const label = screen.getByText("Open")

    expect(label).toBeInTheDocument();

});
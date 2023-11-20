import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"


test("Should load the contact us component", () => {

    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();

});

test("Should load the button inside contact component", () => {

    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();

});

test("Should load the input placeHolder name inside contact component", () => {

    render(<Contact />);

    const inputName = screen.getByPlaceholderText('name');

    expect(inputName).toBeInTheDocument();
});

test("Should load 2 input boxes inside contact component", async () => {
    render(<Contact />);

    const inputBoxes = await screen.findAllByRole('textbox');

    console.log(inputBoxes.length);

    expect(inputBoxes.length).toBeGreaterThanOrEqual(2);
})
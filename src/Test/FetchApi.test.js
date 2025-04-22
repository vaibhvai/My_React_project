import FetchApi from "../Promise/FetchApi";
import { render, screen } from "@testing-library/react";

test('renders fetchapi component' , () => {
    render(<FetchApi/>)
    const lexcomponent = screen.getByText('Oopssss .... something went wrong')
    expect(lexcomponent).toBeInTheDocument()
})
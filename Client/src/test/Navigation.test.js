import { render, screen, fireEvent, getByText, getAllByTestId, } from '@testing-library/react';
import Navigation from '../Components/Navigation';
import { MemoryRouter } from "react-router-dom";

const handleClick = jest.fn();

test('<Navigation />', () => {
  const { debug, getByTestId, getByText } = render(
    // wrap the component with Memory router to avoid Link outside router error
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  )

  const NavButton = getByTestId('nav-button')

  expect(getByText("J E N N E R")).toBeTruthy()
  expect(getByText("T H O M A S")).toBeTruthy()

  expect(getByText("Home").tagName).toBe('A')
  expect(getByText("Projects").tagName).toBe('A')
  expect(getByText("About").tagName).toBe('A')

})
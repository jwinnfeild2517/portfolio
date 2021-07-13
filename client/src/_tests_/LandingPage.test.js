import { render, screen, fireEvent, getByText, getAllByTestId, } from '@testing-library/react';
import LandingPage from '../Components/LandingPage';
import { MemoryRouter } from "react-router-dom";

test('<landing page />', () => {
  const { debug, getByTestId, getByText } = render(
    // wrap the component with Memory router to avoid Link outside router error
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>
  )

  const gitHub = getByTestId('gitHub-link')
  const linkedIn = getByTestId('linkedIn-link')
  const projectsBrowseCard = getByTestId('projectsBrowseLink-card')

  expect(projectsBrowseCard).toBeTruthy()
  expect(projectsBrowseCard.tagName).toBe('A')
  expect(getByText("Projects")).toBeTruthy()

  expect(getByTestId('contactInfo-card')).toBeTruthy()
  expect(getByText("Jenner Thomas")).toBeTruthy()
  expect(getByText('jenner.e.thomas@gmail.com')).toBeTruthy()
  expect(gitHub.tagName).toBe('A')
  expect(gitHub.href).toBe('https://github.com/jwinnfeild2517')
  expect(linkedIn.tagName).toBe('A')
  expect(linkedIn.href).toBe('https://www.linkedin.com/in/jenner-thomas')
})
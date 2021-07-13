import { render, screen, fireEvent, getByText, getAllByTestId, } from '@testing-library/react';
import AboutPage from '../Components/AboutPage';
import picture from '../Assets/images/profilepic.jpg'

test('<About page />', () => {
  const { debug, getByTestId, getByText } = render(<AboutPage />)
  expect(getByText('About').tagName).toBe('H1')
  expect(getByText('About Me').tagName).toBe('H3')

  expect(getByTestId('profile-pic').src).toBe(`${window.location}${picture}`)
  expect(getByTestId('bio')).toBeTruthy()
  expect(getByTestId('bio').tagName).toBe('P')

})
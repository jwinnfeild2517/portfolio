import React from 'react'
import {render, cleanup, fireEvent, waitFor, getByTestId, act} from '@testing-library/react'
import SearchFormContainer from '../../Components/BookSeachApp/SearchFormContainer'
import {MemoryRouter} from 'react-router-dom'
import fetchMOck from 'jest-fetch-mock'

fetchMOck.enableMocks();

afterEach( () => {
  cleanup()
})

beforeEach(() => {
  fetchMOck.resetMocks()
})

const Books = {
  items: [
    {
      id: '1',
      volumeInfo:{
        title: "The Cask of Amontillado",
        authors: ['Engar Allen Poe'],
        imageLinks: {
          thumbnail: "bookpic.jpg"
        },
        categories: 'Philosophy',
        publishedDate: '2011',
        infoLink: "booklink.com",
      }
    },
  ]
}

const handleSubmit = jest.fn()


  test('< SubmitFormContainer /> Layout', async () => {
    const {getByPlaceholderText, getByText} = render(
      <MemoryRouter>
        <SearchFormContainer />
      </MemoryRouter>
    )
    expect(getByText('What do you').tagName).toBe('H1')
    expect(getByText('want to read?').tagName).toBe('SPAN')
    expect(getByPlaceholderText('Enter book or Author')).toBeTruthy()
    expect(getByText('Search')).toBeTruthy()
  })

  test(' <Submit Form with an empty value />', async () => {

    const {getByPlaceholderText, getByText} = render(
      <MemoryRouter>
        <SearchFormContainer />
      </MemoryRouter>
    )

    fireEvent.change(getByPlaceholderText('Enter book or Author'), {
      target: {value: ''}
    })

    fireEvent.click(getByText('Search'))

    expect(getByText('Please enter a book or author to search')).toBeTruthy()

  })

  test('Submit Form with value', async () => {

    fetchMOck.mockResponse(JSON.stringify(Books))

    const {debug, getByPlaceholderText, getByText, queryByText} = render(
      <MemoryRouter>
        <SearchFormContainer />
      </MemoryRouter>
    )

    fireEvent.change(getByPlaceholderText('Enter book or Author'), {
      target: {value: 'Edgar Allen Poe'}
    })

    fireEvent.click(getByText('Search'))

    expect(queryByText('Please enter a book or author to search')).not.toBeTruthy()

    await waitFor(() => getByText('The Cask of Amontillado'))

    Books.items.forEach(book => {
      expect(getByText(`${book.volumeInfo.title}`)).toBeTruthy()
      expect(getByText(`${book.volumeInfo.authors}`)).toBeTruthy()
      expect(getByText(`${book.volumeInfo.categories}`)).toBeTruthy()
      expect(getByText(`${book.volumeInfo.publishedDate}`)).toBeTruthy()
    });

    debug()

  })


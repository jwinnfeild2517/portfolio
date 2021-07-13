import React, {useState} from "react";
import ResultsContainer from './ResultsContainer'
import {Route, useHistory} from 'react-router-dom'
// import AboutPage from '../AboutPage'

const SearchContainer = () => {

  const [bookData, setBookData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [error, setError] = useState('')
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchQuery !== "") {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
        const data = await response.json();
        setBookData(data.items)
        showResults()
      } catch (e) {
        console.log(e);
      }
    } else {
      setError('Please enter a book or author to search')
    }
    // e.currentTarget.reset()
  }

  const showResults = () => {
    history.push('/search/results')
  }

  return (
    <div className="SearchContainer">
        <form className="searchBookForm" onSubmit={handleSubmit}>
          <label for="Book search Field">
            <h1>What do you<br></br><span>want to read?</span></h1>
          </label>
          <br />
          <div className="textInput">
            <input
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              id="Book search Field"
              name="userSearch"
              className="searchField"
              placeholder="Enter book or Author"
              aria-describedby="un-error"
            />
            <button data-testid="loading" type="submit" className="searchBookButton">Search</button>
          </div>
          <p id="un-error" style={{ color: 'white', fontSize: '1.2em', backgroundColor: 'red'}}>{error}</p>
      </form>
      <Route path="/search/results" render={ () => <ResultsContainer data={bookData} />} />
    </div>
  );
}

export default SearchContainer;


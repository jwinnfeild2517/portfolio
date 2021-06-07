import React, {useState} from "react";
import SearchForm from "./SearchForm";
import BookTile from "./BookTile";

const SearchContainer = () => {

  const [booksData, setBookData] = useState([])
  const [containerIsOpen, setContainerIsOpen] = useState(false)

  const handleClick = () => {
    setContainerIsOpen(!containerIsOpen)
  }


  const handleSubmit = (formpayLoad) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${formpayLoad}`)
    .then(response => response.json())
    .then(body => setBookData(body.items))
    .catch(error => console.log(`Error in fetch: ${error.message}`))

    setContainerIsOpen(true)
  }

  const bookList = booksData.map(book => {
    let image =
          book.volumeInfo.imageLinks === undefined
            ? "https://media.istockphoto.com/photos/books-picture-id949118068?k=6&m=949118068&s=612x612&w=0&h=JQ8TsVv0Bx36l1KwwhOaAz564l8MIDSRFebHbLqGjIA="
            : `${book.volumeInfo.imageLinks.thumbnail}`;
    return (
      <BookTile
        key={book.id}
        image={image}
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors}
        rating={book.volumeInfo.averageRating}
        link={book.volumeInfo.infoLink}
      />
    )
  });

  return (
    <div className="SearchContainer">
      <SearchForm handleSubmit={handleSubmit} />
      <div className="showCard right-card">
        <img src="https://images.pexels.com/photos/335253/pexels-photo-335253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="featured-book"></img>
        <div className="show_description">
          <h4>48 Laws Of Power</h4>
          <p>By: Rollo Tommasi</p>
        </div>
      </div>
      <div className="showCard left-card" style={{top: "50%", left: "1em"}}>
        <img src="https://images.pexels.com/photos/335253/pexels-photo-335253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="featured-book"></img>
        <div className="show_description">
          <h4>Life of Oprah</h4>
          <p>By: Oprah Winfrey</p>
        </div>
      </div>
      <div className="bookList" style={containerIsOpen ? {display: 'flex'} : {display: 'none'}}>
        <h1 className="results-close" onClick={handleClick}>X</h1>
        {bookList}
      </div>
    </div>
  );
}



export default SearchContainer;


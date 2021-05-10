import React, { Component } from "react";
import SearchForm from "../Components/BookSeachComponents/SearchForm";
import BookTile from "../Components/BookSeachComponents/BookTile";

export default class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      resultsContainerDisplay: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      resultsContainerDisplay: !prevState.resultsContainerDisplay
    }))
  }

  handleSubmit = formpayLoad => {
    this.handleClick()
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${formpayLoad}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        let booksList = body.items;
        this.setState({ books: booksList });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  render() {
    let bookList = [];
    if (this.state.books != null) {
      // eslint-disable-next-line
      bookList = this.state.books.map(book => {
        let authors = "";
        let image =
          book.volumeInfo.imageLinks === undefined
            ? "https://media.istockphoto.com/photos/books-picture-id949118068?k=6&m=949118068&s=612x612&w=0&h=JQ8TsVv0Bx36l1KwwhOaAz564l8MIDSRFebHbLqGjIA="
            : `${book.volumeInfo.imageLinks.thumbnail}`;

        let authorsArray =
          book.volumeInfo.authors === undefined
            ? ["unknown"]
            : book.volumeInfo.authors;
        authorsArray.forEach(name => {
          if (name !== authorsArray[authorsArray.length - 1]) {
            return (authors += name + ", ");
          } else {
            return (authors += name);
          }
        });

        if (!bookList.includes(book)) {
          return (
            <BookTile
              key={book.id}
              image={image}
              title={book.volumeInfo.title}
              author={authors}
              rating={book.volumeInfo.averageRating}
              link={book.volumeInfo.infoLink}
            />
          );
        }
      });
    }

    return (
      <div className="SearchContainer">
        <SearchForm handleSubmit={this.handleSubmit} />
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
        <div className="bookList" style={this.state.resultsContainerDisplay ? {display: 'flex'} : {display: 'none'}}><h1 className="results-close" onClick={this.handleClick}>X</h1>{bookList}</div>
      </div>
    );
  }
}

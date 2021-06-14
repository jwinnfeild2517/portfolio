import React from 'react'
import BookTile from "./BookTile";
import {Link} from 'react-router-dom'

// import styled from 'styled-components'

const ResultsContainer = (props) => {
  let bookList
  if (props.data) {
    bookList = props.data.map(book => {
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
          category={book.volumeInfo.categories}
          publishedDate={book.volumeInfo.publishedDate}
          link={book.volumeInfo.infoLink}
        />
      )
    })
  }else {
    return <div className="bookList"><h1 style={{color:'white', fontSize: '2em'}}>Loading Book Results...</h1></div>
  }
  return (
    <div className="bookList">
      <Link to="/search" className="BackButton"><span className="fas fa-long-arrow-alt-left"></span>Back</Link>
      {bookList}
  </div>
  )
}

export default ResultsContainer

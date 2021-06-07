import React from "react";

const BookTile = (props) => {
  return (
    <div className="bookTile">
      <img src={props.image} alt="book" className="book-image" />
      <h3>{props.title}</h3>
      <p>
        <strong>Author(s): </strong>
        {props.author}
      </p>
      <p>{props.description}</p>
      <p>
        <strong>Average Rating: </strong> {props.rating}
      </p>
      <button>
        <a href={props.link} target="_blank" rel="noreferrer">Preview</a>
      </button>
    </div>
  );
}

export default BookTile
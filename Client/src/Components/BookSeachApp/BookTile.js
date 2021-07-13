import React, {useState} from "react";

const BookTile = (props) => {
  // const randomColor = randomColor()
  const [isOpen, setIsOpen] = useState(false)
    // change navigation state
    const handleClick = () => setIsOpen(!isOpen)
    // change the menu top position property based on state
    const infoPosition = isOpen ? {left: '0', display: 'flex'} : {left: '-25em', display: 'none'}
  return (
    <div className="bookTile">
      <img src={props.image} alt="" className="book-image"/>
      <button aria-expanded={isOpen} onClick={handleClick} className="fas fa-angle-double-right book-detail-toggle"></button>
      <div className="info" style={infoPosition}>
        <p><strong>Title: </strong>{props.title}</p>
        <p><strong>Author(s): </strong>{props.author}</p>
        <p><strong>Category: </strong>{props.category}</p>
        <p><strong>Publised: </strong>{props.publishedDate}</p>
        <a href={props.link} className="book-google-link" target="_blank" rel="noreferrer" aria-label={`${props.title}'s google link`}>See More</a>
        <button aria-expanded={isOpen} onClick={handleClick} className="fas fa-angle-double-left book-detail-toggle"></button>
      </div>
    </div>
  );
}

export default BookTile
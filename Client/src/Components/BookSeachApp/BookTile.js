import React, {useState} from "react";

const BookTile = (props) => {
  // const randomColor = randomColor()
  const [isOpen, setIsOpen] = useState(false)
    // change navigation state
    const handleClick = () => setIsOpen(!isOpen)
    // change the menu top position property based on state
    const infoPosition = isOpen ? {left: '0'} : {left: '-25em'}
  return (
    <div className="bookTile">
      <button onClick={handleClick} className="book-image"><img src={props.image} alt="book" className="book-image" /></button>
      <div className="info" style={infoPosition}>
        <p><strong>Title: </strong>{props.title}</p>
        <p><strong>Author(s): </strong>{props.author}</p>
        <p><strong>Category: </strong>{props.category}</p>
        <p><strong>Publised: </strong>{props.publishedDate}</p>
        {/* <p>{props.description}</p> */}
        <div className="info-icons">
          <a href={props.link} target="_blank" rel="noreferrer" className="fas fa-info-circle icons"></a>
          <button onClick={handleClick} className="fas fa-arrow-alt-circle-left icons"></button>
        </div>
      </div>
    </div>
  );
}

export default BookTile
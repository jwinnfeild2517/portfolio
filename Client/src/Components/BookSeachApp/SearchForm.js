import React, {useState} from "react";

const SearchForm = (props) => {

  const [searchQuery, setSearchQuery] = useState('')
  const [error, setError] = useState('')

  const SubmitForm = (e) => {
    e.preventDefault();
    e.currentTarget.reset()
    if (error === "") {
      setError("Please enter a book or author to search");
    } else {
      props.handleSubmit(searchQuery);
    }
  };
  return (
    <form className="searchBookForm" onSubmit={SubmitForm}>
      <label>
        <h1>What do you<br></br><span>want to read?</span></h1>
      </label>
      <br />
      <div className="textInput">
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          id="searchField"
          name="userSearch"
          className="searchField"
          placeholder="Enter book name"
        />
        <button type="submit" className="mainPageButton">Submit</button>
      </div>
    </form>
  );
}

export default SearchForm

import React, { Component } from "react";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: null,
      error: null
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  SubmitForm = event => {
    event.preventDefault();
    if (this.state.userSearch == null) {
      this.setState({ error: "Please enter a book or author to search" });
    } else {
      this.props.handleSubmit(this.state.userSearch);
    }
  };

  render() {
    return (
      <form className="searchBookForm" onSubmit={this.SubmitForm}>
        <label>
          <h1>What do you<br></br><span>want to read?</span></h1>
        </label>
        <br />
        <div className="textInput">
          <input
            type="text"
            onChange={this.handleInputChange}
            id="searchField"
            name="userSearch"
            className="searchField"
            placeholder="Enter book name"
          />
          <input type="submit" className="mainPageButton" id="SubmitButton" value="Search" />
        </div>
      </form>
    );
  }
}

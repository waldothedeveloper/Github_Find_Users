import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    }
    this.props.searchUsers(this.state.text);
    this.setState({
      text: ""
    });
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            autoComplete='off'
            type='text'
            name='text'
            value={this.state.text}
            onChange={this.onChange}
            placeholder='Search users...'
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button className='btn btn-light btn-black' onClick={clearUsers}>
            Clear
          </button>
        )}
      </>
    );
  }
}

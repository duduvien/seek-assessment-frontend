// src/components/GuestNamePage.js
import React from 'react';
import api from '../api/api';
import './Guest.css';

export default class GuestName extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input className="input-box" type="text" value={this.props.value} onChange={this.props.handleChange} placeholder="Enter your company name"/>
        <br/>
        <br/>
        <input className="btn-next-outline" type="submit" value="Next &raquo;" />
      </form>
    );
  }
}

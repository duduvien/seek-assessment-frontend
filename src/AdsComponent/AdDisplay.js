// src/AdsComponent/AdDisplay.js
import React from 'react';
import { Thumbnail, Col, Button } from 'react-bootstrap';
import api from '../api/api.js';
import './Ads.css';

export default class AdDisplay extends React.Component {
  constructor(props){
    super(props);
    this.handleOnAdd = this.handleOnAdd.bind(this);
  }
  handleOnAdd(event) {
    this.props.add(this.props.aid);
  }

  render() {
    return (
      <Col xs={6} md={4}>
        <Thumbnail>
          <h3>{this.props.name}</h3>
          <p>$ {this.props.price}</p>
          <p>
          <button id={this.props.aid} className="btn-plus-outline" onClick={this.handleOnAdd}>+</button>
          </p>
        </Thumbnail>
      </Col>
    );
  }
}

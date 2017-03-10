import React, { Component } from 'react';
import logo from './logo.svg';
import api from './api/api';
import Guest from './GuestComponent/GuestName.js';
import Ads from './AdsComponent/AdDisplay.js';
import Cart from './CartComponent/Cart.js';
import './App.css';
import { Jumbotron, Grid, Row, Col, Thumbnail } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: [],
      value: '',
      cart: [],
      grandTotal:0,
      qty: '',
      aid: 0,
      cid: 0,
    }
    this.loadAds = this.loadAds.bind(this);
    this.setCustomerId = this.setCustomerId.bind(this);
    this.setCartInfo = this.setCartInfo.bind(this);
    this.fetchCartInfo = this.fetchCartInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addOnClick = this.addOnClick.bind(this);
    this.deleteCartItem = this.deleteCartItem.bind(this);
    // this.handlePurchase = this.handlePurchase.bind(this);
    // this.handleQtyChange = this.handleQtyChange.bind(this);
    // this.handleAdsChange = this.handleAdsChange.bind(this);
  }

  loadAds(res) {
    this.setState(
      {
        ads: res,
      }
    );
    console.log(this.state);
  }

  setCustomerId(res) {
    this.setState(
      {
        cid: res.id,
      }
    );
    this.fetchCartInfo(res.id);
    console.log(this.state);
  }

  setCartInfo(res) {
    this.setState(
      {
        cart: res.carts,
        grandTotal: res.grandTotal,
      }
    );
    console.log(this.state);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    api.fetchCustomer(this.state.value).then (this.setCustomerId);
  }

  addOnClick(aid){
    api.fetchBuyAds(aid, this.state.cid).then(this.setCartInfo);
  }

  deleteCartItem(aid){
    api.fetchDeleteAdsItem(aid, this.state.cid).then(this.setCartInfo);
  }

  fetchCartInfo(cid) {
      api.fetchCart(cid).then(this.setCartInfo);
  }

  componentDidMount() {
    api.fetchAds().then (this.loadAds);
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Jumbotron className="App-description">
            <h1>Job Advertising Space</h1>
            <p>Ready to make a hire? Advertise it here now.</p>
          </Jumbotron>
        </div>

        <br/>

        <div>
          <p className="App-intro">
            Enter <strong><code>YOUR COMPANY NAME</code></strong> to proceed.
          </p>
          <Guest handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value}/>
        </div>

        <br/>

        <Grid>
          <Row>
            <Col xs={12} md={8}>
              {
                this.state.ads.map((ad) => {
                  return (
                    <Ads name={ad.name} price={ad.price}
                      aid={ad.id} key={ad.id} add={this.addOnClick} minus={this.minusOnClick}/>

                  );
                })
              }
            </Col>
            {
              this.state.cid !== 0 &&
              <Col xs={6} md={4}>
                <Thumbnail>
                  <Cart carts={this.state.cart} grandTotal={this.state.grandTotal} delete={this.deleteCartItem}/>
                </Thumbnail>
              </Col>
            }
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, NavLink } from "react-router-dom"

class Home extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isFavourite: false,
    }
  }
  handleClick() {
    this.setState(prevState => ({
      isFavourite: !prevState.isFavourite,
    }))
  }
  render() {
    const favselected = (this.state.isFavourite) ? "fa fa-star" : "fa fa-star-o"
    return (
      <div className="box">
        <div className="star">
          <i className={favselected} onClick={this.handleClick}></i>
        </div>
        <div className="img-box">
          <img src={this.props.item.image_url} />
        </div>
        <div className="item-desc">
          <h4>{this.props.item.name}</h4>
          <p>{this.props.item.description}</p>
        </div>
      </div>
    );
  }
}
export default Home;
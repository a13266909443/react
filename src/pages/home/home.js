import React, { Component } from 'react';
import './home.scss';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:'首页'
    }
  }
  render(){
    return(
      <div className="home">
        <div className="banner" >
          <div className="banner-content"></div>
        </div>
      </div>
    )
  }
}

export default Home
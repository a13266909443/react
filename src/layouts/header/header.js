import React, { Component } from 'react';

import './header.scss';
class Header extends Component {
  render(){
    let navList = [
      {
        name:'首页',
        url:'/',
      },
      {
        name:'课程库',
        url:'/courseClass',
      },
    ]
    return (
      <header>
        <nav>
          {
            navList.map((item,index)=>{
            return <a href={item.url} key={index}>{item.name}</a>
            })
          }
        </nav>
      </header>
    );
  }
}

export default Header;
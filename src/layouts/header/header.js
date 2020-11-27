import React, { Component } from 'react';
import logoImg from '../../assets/image/logo.png';
import './header.scss';
class Header extends Component {
  constructor(props){
    super(props);
    this.navList = [
      {
        name:'首页',
        url:'/',
      },
      {
        name:'课程库',
        url:'/courseClass',
      },
    ]
  }
  // 挂载前
  UNSAFE_componentWillMount(){
    console.log(this.navList)
  }
  // 挂载后
  componentDidMount(){
    console.log(222)
  }
  render(){
    return (
      <header>
        <nav>
          <img src={logoImg} alt="" className="logo"/>
          <ul>
            {
              this.navList.map((item,index)=>{
              return <li key={index}><a href={item.url}>{item.name}</a></li>
              })
            }
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
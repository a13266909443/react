import React, { Component } from 'react';
import './home.scss';
import Banner from '../../components/home/banner'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:'首页'
    }
    this.bannerData = [
      {url:'https://img.zcool.cn/community/01015557b6bc660000012e7eab8a4e.jpg@2o.jpg'},
      {url:'https://img.zcool.cn/community/01407557b6bc660000018c1b81d010.jpg@2o.jpg'},
      {url:'https://img.zcool.cn/community/01f59d57b6bc660000012e7e610a04.jpg@2o.jpg'},
      {url:'https://img.zcool.cn/community/01d18d57b6bc670000018c1b1ecdda.jpg@2o.jpg'},
      {url:'https://img.zcool.cn/community/0100da57b6bc670000018c1baf8374.jpg@2o.jpg'},
    ]
  }
  componentDidMount(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                info.innerHTML = xhr.responseText;
                console.log(info.innerHTML);
            }
        }
    };
    // 每次需要发请求需要做两步：
    xhr.open("get", 'http://localhost:3002/api', true);
    xhr.send(null);
  }
  render(){
    return(
      <div className="home">
        <Banner bannerData={this.bannerData} />
      </div>
    )
  }
}

export default Home
import React, { Component } from 'react';
import './home.scss';
import Banner from '../../components/home/banner'
import axios from "../../../api"

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:'首页',
      list:[]
    }
    this.bannerData = [
      {url:'https://img.zcool.cn/community/01015557b6bc660000012e7eab8a4e.jpg@2o.jpg'},
      {url:'https://img.zcool.cn/community/01407557b6bc660000018c1b81d010.jpg@2o.jpg'},
      {url:'https://img.zcool.cn/community/01f59d57b6bc660000012e7e610a04.jpg@2o.jpg'},
      {url:'https://img.zcool.cn/community/01d18d57b6bc670000018c1b1ecdda.jpg@2o.jpg'},
      {url:'https://img.zcool.cn/community/0100da57b6bc670000018c1baf8374.jpg@2o.jpg'}
    ]
  }
  componentDidMount(){
    axios.get('http://localhost:3002/api').then(res=>{
      if(res.status === 200){
        this.setState({
          list: res.data
        })
      }
    })
  }
  render(){
    return(
      <div className="home">
        <Banner bannerData={this.bannerData} />
        <ul>
          {
            this.state.list.map((val,i)=>{
              return <li key={i}>{val.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Home
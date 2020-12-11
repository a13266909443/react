import React, { Component } from 'react';
import './banner.scss';
import Swiper from "swiper/dist/js/swiper"
import "swiper/dist/css/swiper.css"

export default class Banner extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    let mySwiper = new Swiper ('.banner-swiper',{
      autoplay:{delay: 3000},
      loop: true,
      effect : 'fade',
      observer:true,
      observeParents:true,
      on:{
        
      }
    })
  }
  render(){
    return(
      <div className="banner" ref="banner">
        <div className="banner-content">
          <div className="swiper-container banner-swiper">
            <div className="swiper-wrapper">
              {
                this.props.bannerData.map((item,index)=>{
                  return <div className="swiper-slide" key={index}><img src={item.url} alt="1"/></div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
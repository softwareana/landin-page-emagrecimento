import { Component } from 'react'
import banner from "../../images/banner.png"
import "./banner.css"

export class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <img src={banner} alt="capa" />
      </div>
    )
  }
}

export default Banner

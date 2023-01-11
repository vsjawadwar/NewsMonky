import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='row'>
        <p>News Component</p>
        <div className="col-md-4">
        <NewsItem title="myTitle" description="myDesc"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="myTitle" description="myDesc"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="myTitle" description="myDesc"/>
        </div>
      </div>
    )
  }
}

export default News

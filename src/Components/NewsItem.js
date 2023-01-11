import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description}=this.props;
    return (
      <div className='container my-3'>
        <div className="card" style={{width: "18rem"}}>
  <img src="https://www.reuters.com/resizer/CLRzQjonglzi2uDp26ehPmz1jNQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SGGJUH3QS5K33PSX4IGTUAQPYM.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="/abcd" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem

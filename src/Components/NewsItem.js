import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, publishedAt } = this.props;
    return (
      <div className='container my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imgUrl ? 'https://images.macrumors.com/t/3P6Lrfzop1IaxgC1pWwE_ZTBYrY=/1600x0/article-new/2023/01/iOS-17-Icon-Mock-Feature-Feature.jpg' : imgUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
            <p className="card-text">
              <small className="text-mute">Author:{author}<br /> Posted On: {publishedAt}</small>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

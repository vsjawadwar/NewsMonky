import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/everything?q=apple&from=2023-01-10&to=2023-01-10&sortBy=popularity&apiKey=565c168d4a9040d99f607a73966637ed";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div className="container">
        <div className='row'>
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage ? element.urlToImage : ""} newsUrl={element.url ? element.url : ""} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News

import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: null
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/everything?q=apple&from=2023-01-10&to=2023-01-10&sortBy=popularity&apiKey=565c168d4a9040d99f607a73966637ed&pageSize=3";
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      loading:false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });
  }
  handleNextClick = async () => {
    console.log("Next Clicked")
    let url = `https://newsapi.org/v2/everything?q=apple&from=2023-01-10&to=2023-01-10&sortBy=popularity&apiKey=565c168d4a9040d99f607a73966637ed&page=${this.state.page + 1}&pageSize=3`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      loading:false,
      page: this.state.page + 1,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });
  }
  handlePreviousClick = async () => {
    console.log("Previous Clicked")
    let url = `https://newsapi.org/v2/everything?q=apple&from=2023-01-10&to=2023-01-10&sortBy=popularity&apiKey=565c168d4a9040d99f607a73966637ed&page=${this.state.page - 1}&pageSize=3`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      loading:false,
      page: this.state.page - 1,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });
  }
  render() {
    return (
      <div className="container">
        {this.state.loading && <Spinner />}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage ? element.urlToImage : ""} newsUrl={element.url ? element.url : ""} />
            </div>
          })}
        </div>
        <div className="container my-3 d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&#8592;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 21)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &#8594;</button>
        </div>
      </div>
    )
  }
}

export default News

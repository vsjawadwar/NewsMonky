import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+ string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title=`NewsMonky-${this.capitalizeFirstLetter(this.props.category)}`;
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=565c168d4a9040d99f607a73966637ed&page=${this.state.page}&pageSize=3`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });
  }
  async componentDidMount() {
    this.updateNews();
  }
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }
  handlePreviousClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  }
  render() {
    return (
      <div className="container">
        {this.state.loading && <Spinner />}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage ? element.urlToImage : ""} newsUrl={element.url ? element.url : ""} author={element.author ? element.author : "Unknown"} publishedAt={element.publishedAt ? element.publishedAt : "Date Not Available"} />
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

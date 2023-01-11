import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles =
    [
      {
        "source": {
          "id": "bbc-news",
          "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Disney boss calls for workers to return to office four days a week",
        "description": "From the start of March employees will be asked to be in the office from Monday to Thursday.",
        "url": "https://www.bbc.co.uk/news/business-64218702",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0356/production/_128245800_bobigerandmickey.jpg",
        "publishedAt": "2023-01-10T04:01:05Z",
        "content": "Disney's boss has called on employees who are currently working from home to start going into the office for four days a week from the start of March.\r\nChief executive Bob Iger said so-called \"hybrid… [+2071 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Factbox: Golden Globe awards: Full list of nominees - Reuters",
        "description": "Hollywood gathers on Tuesday for the 2023 <a href=\"/lifestyle/elvis-avatar-face-off-hollywood-returns-golden-globes-2023-01-10/\">Golden Globes</a>, the first major awards show of the season. After diversity and ethics scandals at the Globes organizer - the Ho…",
        "url": "https://www.reuters.com/lifestyle/golden-globe-awards-full-list-nominees-2023-01-10/",
        "urlToImage": "https://www.reuters.com/resizer/CLRzQjonglzi2uDp26ehPmz1jNQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SGGJUH3QS5K33PSX4IGTUAQPYM.jpg",
        "publishedAt": "2023-01-10T11:12:00Z",
        "content": "Jan 10 (Reuters) - Hollywood gathers on Tuesday for the 2023 Golden Globes, the first major awards show of the season. After diversity and ethics scandals at the Globes organizer - the Hollywood Fore… [+5637 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Android Central"
        },
        "author": "andrew.myrick@futurenet.com (Andrew Myrick)",
        "title": "Carriers ruined my ability to switch between phones, not Apple",
        "description": "In the long run, the idea of an eSIM-only phone makes a bit of sense. But if the current carrier implementation is anything to go by, that couldn't be further from the truth.",
        "url": "https://www.androidcentral.com/phones/iphone-android-esim-transfer",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/9e2w2YqSQzsCFs5paEPaMi-1200-80.jpg",
        "publishedAt": "2023-01-10T17:30:00Z",
        "content": "In all of my years of using smartphones, I’ve had a tendency to regularly move my SIM card between whichever iPhone or Android phones I owned at the time. Sometimes, I prefer using the iPhone for its… [+6509 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Android Central"
        },
        "author": "jerry.hildenbrand@futurenet.com (Jerry Hildenbrand)",
        "title": "The Nothing Phone (1) Beta Membership program is your chance to buy a really cool broken product",
        "description": "Nothing is worse than using a beta program as a shield except charging people for the experience.",
        "url": "https://www.androidcentral.com/phones/the-nothing-phone-1-beta-membership-program-is-your-chance-to-buy-a-really-cool-broken-product",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/JhYBbLnYcxsiymP4sFg4MS-1200-80.jpg",
        "publishedAt": "2023-01-10T18:30:59Z",
        "content": "When I was a kid a friend's dad had an MG Midget with the steering wheel on the \"wrong\" side. We all thought it was super-cool because it was different from all the other tiny compact cars and was bu… [+2171 chars]"
      }]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className="container">
        <div className='row'>
          {this.state.articles.map((element) => {
           return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} />
            </div>
          })}
        </div>
        {/* <div className="col-md-4">
        <NewsItem title="myTitle" description="myDesc" imgUrl="https://www.reuters.com/resizer/CLRzQjonglzi2uDp26ehPmz1jNQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SGGJUH3QS5K33PSX4IGTUAQPYM.jpg"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="myTitle" description="myDesc" imgUrl="https://www.reuters.com/resizer/CLRzQjonglzi2uDp26ehPmz1jNQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SGGJUH3QS5K33PSX4IGTUAQPYM.jpg"/>
        
        </div>
        <div className="col-md-4">
        <NewsItem title="myTitle" description="myDesc" imgUrl="https://www.reuters.com/resizer/CLRzQjonglzi2uDp26ehPmz1jNQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SGGJUH3QS5K33PSX4IGTUAQPYM.jpg"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="myTitle" description="myDesc" imgUrl="https://www.reuters.com/resizer/CLRzQjonglzi2uDp26ehPmz1jNQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SGGJUH3QS5K33PSX4IGTUAQPYM.jpg"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="myTitle" description="myDesc" imgUrl="https://www.reuters.com/resizer/CLRzQjonglzi2uDp26ehPmz1jNQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SGGJUH3QS5K33PSX4IGTUAQPYM.jpg"/>
        </div>
      */}
      </div>

    )
  }
}

export default News

import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export  class News extends Component {
  // step 1
  // Below code is for feaching the data and checking whether data is comeing or not from api

  // articles = [
  //   {
  //     "source": { "id": "news-com-au", "name": "News.com.au" },
  //     "author": null,
  //     "title": "Ponting taken to hospital in heart scare",
  //     "description": "Former Australian cricket captain Ricky Ponting has been taken to hospital after reportedly suffering a heart scare during day three of the first Test between Australia and the West Indies in Perth.",
  //     "url": "https://www.news.com.au/sport/cricket/ricky-ponting-taken-to-hospital-over-heart-scare/news-story/f5da43bfd98a12588730497f1cdd9b21",
  //     "urlToImage": "https://content.api.news/v3/images/bin/4a951166f7b2c9373db2aea3b772b60f",
  //     "publishedAt": "2022-12-02T08:38:00Z",
  //     "content": "Former Australian cricket captain Ricky Ponting has been taken to hospital after reportedly suffering a heart scare during day three of the first Test between Australia and the West Indies in Perth.\r… [+577 chars]"
  //   },
  //   {
  //     "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //     "author": null,
  //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     "publishedAt": "2020-04-27T11:41:47Z",
  //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //   },
  //   {
  //     "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //     "author": null,
  //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     "publishedAt": "2020-03-30T15:26:05Z",
  //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   }
  // ]


  // step 1
  // Below code is for feaching the data and checking whether data is comeing or not from api
  // constructor() {
  //     super();
  //     console.log("Helow am a constructor");
  //     this.state ={
  //         articles:this.articles,
  //         loading:false
  //     }
  // }

  
  // step 2

  static defaultProps ={
    country:"in",
    pageSize:8,
    category:"general"
  }

  static ptopTypes ={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }

  constructor() {
    super();
    this.state ={
        articles:[],
        loading:false,
        page:1
    }
}

  async componentDidMount(){
  // console.log("cdm")
  // below url i took from newsapi.org
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=08cacedfdd524a7d809945659e7b7ce9&page=1&pageSize=${this.props.pageSize}`;
  // here am going to async wait function using async key in componentmountdid and await key before to featch
  this.setState({loading:true});
  let data = await fetch(url);
  let passdata =await data.json();
  console.log(passdata);
  this.setState({
    articles:passdata.articles, 
    loading:false,
    totalResults:passdata.totalResults
  });
}


handelPrevious= async ()=>{
  console.log("Privious");
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=08cacedfdd524a7d809945659e7b7ce9&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url);
  let passdata =await data.json();
  console.log(passdata);
  this.setState({
    page:this.state.page -1,
    articles:passdata.articles,
    loading:false
  })
}

handelNext= async ()=>{
  console.log("Next");
  if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
  
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=08cacedfdd524a7d809945659e7b7ce9&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let passdata =await data.json();
    console.log(passdata);
    this.setState({
      page:this.state.page +1,
      articles:passdata.articles,
      loading:false
    })
  }
}



  render() {
    return (
      <>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center mb-3">
                    <h2 className="mb-3 mt-3">News Headings</h2>
                    {this.state.loading && <Spinner />}
                </div>
                {!this.state.loading && this.state.articles.map((element)=>{ 
                  return <div className="col-md-4" key={element.url}>
                            <NewsItem 
                              title={element.title?element.title.slice(0,40):""} 
                              description={element.description?element.description.slice(0,85):""} 
                              imageUrl={element.urlToImage} 
                              newsUrl={element.url}
                             />
                          </div>
                })}
            </div>
        </div>

        <div className="container d-flex justify-content-between my-3">
          <button type="button" className="btn btn-sm btn-dark" disabled={this.state.page <= 1} onClick={this.handelPrevious} >&larr; Previous</button>
          <button type="button" className="btn btn-sm btn-dark" disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handelNext} >Next &rarr;</button>
        </div>
      </>
    )
  }
}

export default News
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    constructor(props) {
        super();
        this.state = { articles: [], loading: true, page: 1, totalNews:0 }
        document.title=`Newsify - ${props.category.slice(0,1).toUpperCase()+props.category.slice(1)}`
    }

    async componentDidMount() {
        this.props.setProgress(10);
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=5dc72b6f48ed48408cb7f131a53ee113&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({ articles: parsedData.articles, loading: false, totalNews: parsedData.totalResults });
        this.props.setProgress(100);
    }
    
    fetchMoreData = async ()=>{
        this.state.page++;
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=4f159f84c7b747ff94c848f03bdb0c34&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedData.articles), loading: false, totalNews: parsedData.totalResults });
    }

    render() {
        return (
            <>
                    {this.state.loading===true && <Spinner/>}

                    {<h2 className={`text-center my-4 text-${this.props.color}`}>Newsify - {this.props.category.slice(0,1).toUpperCase()+this.props.category.slice(1)} Top Headlines</h2>}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length!==this.state.totalNews}
                        loader={<Spinner/>}
                    >
                <div className="container" style={{backgroundColor: this.props.theme==="dark"?"#0d041b":"white"}}>
                    <div className="row my-4">
                        {this.state.articles.map((element) => {
                            return <div className="col-lg-4 col-md-6 my-2" key={element.url}>
                                <NewsItem title={element.title = element.title === null ? "" : element.title.length > 40 ? element.title.slice(0, 40) + "..." : element.title} description={element.description = element.description === null ? "" : element.description.length > 80 ? element.description.slice(0, 80) + "..." : element.description} imageUrl={element.urlToImage = element.urlToImage === null ? "https://images.moneycontrol.com/static-mcnews/2022/07/stocks_market-stock_stock-5-770x433.jpg" : element.urlToImage} newsUrl={element.url} time={new Date(element.publishedAt).toUTCString()} author={element.author === null ? "News API" : element.author} source={element.source.name} theme={this.props.theme} color={this.props.color}/>
                            </div>
                        })}
                    </div>
                </div>
                    </InfiniteScroll>
            </>
        )
    }
}

export default News
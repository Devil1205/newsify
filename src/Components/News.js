import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {

    constructor() {
        super();
        this.state = { articles: [], loading: true, page: 1}
    }

    async componentDidMount() {
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=4f159f84c7b747ff94c848f03bdb0c34&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, loading: false, totalNews: parsedData.totalResults });
    }
    
    handleNextClick = async ()=>{
        this.state.page++;
        console.log(this.state.page);
        this.componentDidMount();
    }
    handlePrevClick = async ()=>{
        this.state.page--;
        console.log(this.state.page);
        this.componentDidMount();
    }
    render() {
        return (
            <>
                <div className="container">
                    {this.state.loading && <div className="d-flex flex-column align-items-center my-4">
                        <div className="spinner-border text-primary" role="status">
                        </div>
                        <span>Loading...</span>
                    </div>}


                    {!this.state.loading && <h2 className='text-center my-4'>Newsify - Top Headlines</h2>}
                    <div className="row my-4">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4 my-2" key={element.url}>
                                <NewsItem title={element.title = element.title===null?"":element.title.length > 40 ? element.title.slice(0, 40) + "..." : element.title} description={element.description = element.description===null?"": element.description.length > 80 ? element.description.slice(0, 80) + "..." : element.description} imageUrl={element.urlToImage = element.urlToImage === null ? "https://images.moneycontrol.com/static-mcnews/2022/07/stocks_market-stock_stock-5-770x433.jpg" : element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                <div className="d-flex justify-content-between mx-3">
                    <button disabled={this.state.page<=1} className="btn btn-danger" onClick={this.handlePrevClick}>&larr; Prev</button>
                    <button disabled={Math.ceil(this.state.totalNews/this.props.pageSize)<this.state.page} className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
                </div>
            </>
        )
    }
}

export default News
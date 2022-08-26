import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalNews, setTotalNews] = useState(0);
    document.title = `Newsify - ${props.category.slice(0, 1).toUpperCase() + props.category.slice(1)}`

    const countries = ['ar','au','at','be','br','bg','ca','cn','co','cu','cz','eg','fr','de','gr','hk','hu','in','id','ie','il','it','jp','lv','lt','my','mx','ma','nl','nz','ng','no','ph','pl','pt','ro','ru','sa','rs','sg','sk','si','za','kr','se','ch','tw','th','tr','ae','ua','uk','us','ve'];
    const updateNews = async () => {
        props.setProgress(10);
        setLoading(true);
        let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${countries[props.country]}&apiKey=e7245aba25df4ccd94266b2e06ade2f5&page=${page}&pagesize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles((parsedData.articles));
        setLoading(false);
        setTotalNews(parsedData.totalNews);
        props.setProgress(100);
    }
    useEffect(() => {
        updateNews();
    }, [props.country]);


    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${countries[props.country]}&apiKey=e7245aba25df4ccd94266b2e06ade2f5&page=${page + 1}&pagesize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setLoading(false);
        setTotalNews(parsedData.totalNews);
    }


    return (
        <>
            {loading === true && <Spinner />}

            {<h2 className={`text-center my-4 text-${props.color}`}>Newsify - {props.category.slice(0, 1).toUpperCase() + props.category.slice(1)} Top Headlines</h2>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalNews}
                loader={<Spinner />}
            >
                <div className="container" style={{ backgroundColor: props.theme === "dark" ? "#0d041b" : "white" }}>
                    <div className="row my-4">
                        {articles.map((element) => {
                            return <div className="col-lg-4 col-md-6 my-2" key={element.url}>
                                <NewsItem title={element.title = element.title === null ? "" : element.title.length > 40 ? element.title.slice(0, 40) + "..." : element.title} description={element.description = element.description === null ? "" : element.description.length > 80 ? element.description.slice(0, 80) + "..." : element.description} imageUrl={element.urlToImage = element.urlToImage === null ? "https://images.moneycontrol.com/static-mcnews/2022/07/stocks_market-stock_stock-5-770x433.jpg" : element.urlToImage} newsUrl={element.url} time={new Date(element.publishedAt).toUTCString()} author={element.author === null ? "News API" : element.author} source={element.source.name} theme={props.theme} color={props.color} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

export default News
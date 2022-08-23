import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let {title,description,time,author,source,imageUrl,newsUrl} = this.props;
        return (
            <div>
                <div className="card mx-3" style={{ minHeight: "30rem" ,backgroundSize: "40px"}}>
                    <img src={imageUrl} className="card-img-top" alt="..." style={{height: "200px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text" style={{minHeight: "50px"}}>{description}</p>
                        <p class="card-text"><small class="text-muted">By {author} on {time}</small></p>
                        <p className="card-text fw-bold fs-6" style={{minHeight: "25px"}}>{source}</p>
                        <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
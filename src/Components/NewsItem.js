import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl} = this.props;
        return (
            <div>
                <div className="card mx-3" style={{ height: "27rem" ,backgroundSize: "40px"}}>
                    <img src={imageUrl} className="card-img-top" alt="..." style={{height: "200px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text" style={{height: "72px"}}>{description}</p>
                        <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
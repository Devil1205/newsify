import React from 'react';

const NewsItem = (props) => {
        const {title,description,time,author,source,imageUrl,newsUrl} = props;
        return (
            <div>
                <div className="card mx-3" style={{ minHeight: "30rem" ,backgroundSize: "40px", backgroundColor: props.theme==="dark"?"rgb(32 10 64 / 15%)":"white", color: props.color}}>
                    <span className="badge rounded-pill bg-danger" style={{position: "absolute", width: "fit-content", alignSelf: "flex-end" }}>{source}</span>
                    <img src={imageUrl} className="card-img-top" alt="..." style={{height: "200px"}}  />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text" style={{minHeight: "50px"}}>{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {time}</small></p>
                        <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
export default NewsItem
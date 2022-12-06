import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <>
                <div className="card mb-3">
                    <img src={!imageUrl?"https://www.shutterstock.com/image-photo/cold-concrete-null-sign-on-600w-159523277.jpg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                       
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
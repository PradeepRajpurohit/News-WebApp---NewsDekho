import React from 'react'

export default function News(props){
        let { title, description, imgUrl, url, publish, author, mode} = props;
        
        document.body.style.backgroundColor = `${mode.background}`;
        
        return (
            <div className="card mb-3" style={{ maxWidth: "100%", background : mode.background}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={!imgUrl?"https://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-wallpapers-Full-HD-backgroud.jpg":imgUrl} className="img-fluid rounded-start " alt="Not Found!" style={{ height: "100%" }} />
                    </div>
                    <div className="col-md-8" style={{color : mode.text}}>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text" ><small>By {author} on {new Date(publish).toGMTString()}.</small></p>
                            <a href={url} target="_blank" rel='noreferrer' className="btn" style={{color : props.mode.background}}>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


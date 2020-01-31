import React from 'react';
import { Link } from 'react-router-dom';


const LatestNews = (props) => {

    const renderLatest = ({latestD}) => {
        if(latestD){
            return latestD.map((data,index) => {
                return(
                    <Link to={`/details/${data.id}`} className="item" key={index}>
                        <div className="image_cover"
                        style={{background:`url('/images/articles/${data.img}')`}}>
                            <div className="description">
                                <span>{data.category}</span>
                                <div>{data.title}</div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }
    return(
        <div className="home-latest">
            <h1>LatestNews</h1>
            {renderLatest(props)}
        </div>
    )
}

export default LatestNews;
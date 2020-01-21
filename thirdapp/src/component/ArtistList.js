import React from 'react';
import {Link} from 'react-router-dom';


const ArtistList = (props) => {

    const listRender = ({artistData}) => {
        if(artistData){
            return  artistData.map((data,index) => {

                const style={
                    background:`url('/images/covers/${data.cover}.jpg')`
                }
                return(
                    <Link to={`/artists/${data.id}`} key={index} className="artist_item"
                    style={style}>
                        <div>{data.name}</div>
                    </Link>
                )
            })
        }
    }

    return(
        <div className="artist_list">
            <h4>List Of Artists</h4>
            {listRender(props)}
        </div>
    )
}


export default ArtistList
import React from 'react';

const AlbumList = (props) => {

    const showAlbums = ({albumd}) => {
        if(albumd){
            return albumd.map((item,index)  => {
                return(
                    <img src={`/images/albums/${item.cover}.jpg`}  key={index}/>
                )
            })
        }
    }

    return (
        <div className="album_list">
           {showAlbums(props)}
        </div>
    )

}

export default AlbumList
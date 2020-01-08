import React from 'react';


const NewsList = (props) => {
    console.log(">>>>in NewsList", props);
    
    const newsdisplay = props.newsData.map((data) =>{
        return(
            <div key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })
    return(
        <div>
            {newsdisplay}
        </div>
    )
}


export default NewsList;
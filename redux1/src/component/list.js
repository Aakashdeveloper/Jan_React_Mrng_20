import React from 'react';

const List =  (props) => {

        const renderList = ({prodlist}) => {
            if(prodlist){
                return prodlist.map((item) => {
                    return(
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                        </div>
                    )
                })
            }
        }

        return(
            <div>
                {renderList(props)}
            </div>
        )
    
   
}

export default List;
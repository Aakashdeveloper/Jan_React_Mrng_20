import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const client = new ApolloClient({
    uri:'http://localhost:8600/graphql'
});

const GET_PRODUCT = gql`
query product($id: Int)
   {
       product(id:$id){
           name,
           price,
           rating
       }
} `

class ProductList extends Component{
    constructor(props){
        super()

        this.state={
            id:3
        }
    }


    render(){
        return(
            <div>
                <Query query={GET_PRODUCT} client={client} variables={{id:this.state.id}}>
                    {({loading,error,data}) => {
                        if(loading) return <p>loading.....</p>
                        if(error) return <p>Error.....</p>
                        return(
                            <div>
                                <p>{data.product.name}</p>
                                <p>{data.product.price}</p>
                                <p>{data.product.rating}</p>
                            </div>
                        )
                    }}

                </Query>
            </div>
        )
    }
}

ReactDOM.render(<ProductList/>,document.getElementById('root'));